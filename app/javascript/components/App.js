import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import AddApartment from "./pages/AddApartment"

class App extends React.Component{
  render(){
    return(
      <Router>
        <h1>This is a React Component</h1>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add">Add Apartment</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/add" component={ AddApartment } />
        </Switch>
      </Router>
    )
  }
}
export default App