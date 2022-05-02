import React, { Component } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from "reactstrap"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { withRouter } from "react-router-dom"
import AuthenticationService from "../services/AuthenticationService"
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

class AppNavbar extends Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
		this.toggle = this.toggle.bind(this)
		this.state = {
			showUser: false,
			username: undefined,
			login: false,
		}
	}

	componentDidMount()
	{
		const user = AuthenticationService.getCurrentUser()
		if (user) {
			this.setState({
				showUser: true,
				login: true,
				username: user.username,
			})
		}
	}

	signOut = () => {
		AuthenticationService.signOut()
		this.props.history.push("/home")
		window.location.reload()
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		return (
			<Navbar color="dark" dark expand="md">
				<NavbarBrand  className="mr-auto">
					<ConfirmationNumberIcon fontSize="large" />
					<a href="/home"><span style={{color:"white",fontSize:"25px"}}>Ticketing Application</span></a>
				</NavbarBrand>

				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					{this.state.login ? (
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavbarText >
									<AccountCircleIcon fontSize="large" ></AccountCircleIcon> <a href="/profile"><span style={{color:"white",fontSize:"20px"}}>{this.state.username}</span></a>
								</NavbarText>
							</NavItem>
							<NavItem>
								<NavLink href="#" onClick={this.signOut}>
								<button type="button" className="btn btn-danger">LogOut</button>
								</NavLink>
							</NavItem>
						</Nav>
					) : (
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/signin"><button type="button" className="btn btn-success">Login</button></NavLink>
							</NavItem>

							<NavItem>
								<NavLink href="/signup"><button type="button" className="btn btn-primary">Signup</button></NavLink>
							</NavItem>
						</Nav>
					)}
				</Collapse>
			</Navbar>
		)
	}
}

export default withRouter(AppNavbar)
