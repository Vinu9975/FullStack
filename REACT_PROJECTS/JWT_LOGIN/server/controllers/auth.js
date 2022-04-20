const User = require("../models/user")
const jwt = require("jsonwebtoken") 
const expressJwt = require("express-jwt") 
const { errorHandler } = require("../helpers/dbErrorHandler")

exports.signup = async (req, res) => {
	try {
		const user = await new User(req.body)

		await user.save((err, user) => {
			if (err) {
				return res.status(400).json({ err })
			}
			res.status(200).json({ user })
		})
	} catch (err) {
		console.error(err.message)
	}
}

exports.signin = (req, res) => {
	
	try {
		const { username, password } = req.body
		User.findOne({ username }, (err, user) => {
			if (err || !user) {
				return res.status(400).json({
					error: "User with that email does not exist. Please signup",
				})
			}
			
			if (!user.authenticate(password)) {
				return res.status(401).json({
					error: "Email and password dont match",
				})
			}
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
			res.cookie("t", token, { expire: new Date() + 9999 })
			const { _id, firstname, lastname,username, email, authorities } = user
			return res.json({ _id, email, firstname:firstname,username:username, lastname:lastname, authorities,accessToken:token })
		})
	} catch (err) {
		console.log(err)
	}
}

exports.signout = (req, res) => {
	res.clearCookie("t")
	res.json({ message: "Signout success" })
}

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET,
	userProperty: "auth",
})

exports.isAuth = (req, res, next) => {
	let user = req.profile && req.auth && req.profile._id == req.auth._id
	if (!user) {
		return res.status(403).json({
			error: "Access denied",
		})
	}
	next()
}
