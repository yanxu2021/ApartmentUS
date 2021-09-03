import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
          
          <NavLink to="/">Copyright &copy; ApartmentUs 2021</NavLink>
          <br/>
          <NavLink to="/about">Terms & Conditions</NavLink>
          <br/>
          <NavLink to="/about">Help</NavLink>
          <br/>
          <NavLink to="/about">About Us</NavLink>
      </footer>
    )
  }
}

export default Footer