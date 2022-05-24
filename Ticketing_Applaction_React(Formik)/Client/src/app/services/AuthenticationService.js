import axios from "axios"

class AuthenticationService {
	API = "http://localhost:8080"
	T=localStorage.getItem("Token")

	signin = async (username, password) => {
		
		try {
			return axios
				.post(`${this.API}/api/auth/signin`, { username, password })
				.then((response) => {
					if (!response.error) {
						if (response.data) {
							localStorage.setItem("user", JSON.stringify(response.data)),
							localStorage.setItem("Token", JSON.stringify(response.data.accessToken))
						}
						return response.data
					} else {
						return response.error
					}
				})
				.catch((err) => {
					console.log(err)
					throw err
				})
		} catch (err) {
			console.log(err)
		}
	}

	signOut() {
		localStorage.removeItem("user")
		localStorage.removeItem("Token")
	}

	register = async (firstname, lastname, username, email, password) => {
		return axios.post(`${this.API}/api/auth/signup`, {
			firstname,
			lastname,
			username,
			email,
			password
		})
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"))
	}



	//ticket servicess
	getTicket = async() => {
		
	 	return await axios.get(`${this.API}/api/ticket/get`);
	}
	
	addTicket=async(Uname,CreatedDate,Email,desc)=>{
		return axios.post(`${this.API}/api/ticket/addTicket`,{
			Uname,
			CreatedDate,
			Email,
			desc
		})

	}

	updateTicket=async(id,UpdateDate,desc)=>{
		return axios.put(`${this.API}/api/ticket/${id}`,{UpdateDate,desc})
	}

	delTicket=async(id,DeleteDate,isDelete)=>{
		return axios.put(`${this.API}/api/ticket/del/${id}`,{DeleteDate,isDelete})
	}

	getTicket1= (id)=>{
		return axios.get(`${this.API}/api/ticket/${id}`);
	}

}

export default new AuthenticationService()
