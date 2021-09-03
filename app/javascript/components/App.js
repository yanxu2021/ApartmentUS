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
import NotFound from "./pages/NotFound"
import New from "./pages/New"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Edit from "./pages/Edit"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends React.Component{
  render(){
    return(
      <Router>
        <Header/>

        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/new">Add Apartment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/index">See all apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/show/:id">Details about this apartment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/edit">update the apartment</NavLink>
          </NavItem>
        </Nav>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ AboutUs } />
            <Route path="/new" component={ New } />
            <Route path="/index" component={ Index} />
            <Route path="/show" component={ Show } />
            <Route path="/edit" component={ Edit } />
            <Route component={NotFound} />
        </Switch>

        <Footer/>
      </Router>
    )
  }
}
export default App