import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

class Header extends Component {
  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo"/>
        </NavLink>
        <div className="nav-bar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          {logged_in && <a href={sign_out_route} className="nav-link">Sign Out</a>}
          {!logged_in && <a href={sign_in_route} className="nav-link">Sign In</a>}
          {!logged_in && <a href={new_user_route} className="nav-link">Register</a>}
        </div>
      </header>
    )
  }
}
export default Header