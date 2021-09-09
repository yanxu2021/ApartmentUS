import React, { Component } from 'react'
import { NavLink } from "react-router-dom" 
import { Button, Card, CardTitle, CardDeck, CardBody } from 'reactstrap'
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'

class Home extends Component {
  render() {
    const {
      logged_in,
    } = this.props
    console.log(this.props)
    return(
      <div className="page-body">
        <br/>
        <br/>
        <h3>We Create an Apartment Community For All</h3> 
        <p>For anyone own or looking for an apartment, and not only a location but also a life style.<br/>
        It can be tough to find the right place to call your next home, <br/>
        and finding it before it gets snapped up by another renter can be even tougher. <br/>
        In a competitive market, available apartments come and go in a moment's notice, <br/>
        and a rental open house can feel more like a face-off with other renters than a tour of the space.<br/>
        <br/>
        Fortunately, we are here to provide more accurate availabilities and better search options, <br/>
        which benefits you as more useful information becomes available with a tap of a finger. <br/>
        We are not only making it easier to sign a lease, <br/>
        but also sharing you more information about the community you are going to be invoved.</p>
        <br/>                

        <div className="nav-option">
          {/* <NavLink to="/" className="nav-link"></NavLink> */}
          <a href={`/index`} className="nav-link"><Button>See All Apartment</Button></a>
          {logged_in && <a href={`/new`} className="nav-link"><Button>Add Apartment</Button></a>}
          {logged_in && <a href={`/myapartments`} className="nav-link"><Button> See My Apartments</Button></a>}
        </div>

        <br/>
        <br/>
        <br/>
        <div className="gallery">
          <h4>Meet the Community and More Ideas</h4>
          <div class="card-group">
            <div class="card">
              <img width="400" src={first} alt="first" className="img" />
              <div class="card-body">
                <h5 class="card-title">6 Easy, Affordable Apartment Renovations-Landlords Love, Too</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <br />
                <br />
                <NavLink to={`/show`}><Button>Read More</Button></NavLink>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            
            <div class="card">
              <img width="400" src={second} alt="second" className="img" />
              <div class="card-body">
                <h5 class="card-title">Affordable Balcony or Patio Decor Hacks-So It's Your Favorite Place at Home</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <br />
                <br />
                <NavLink to={`/show`}><Button>Read More</Button></NavLink>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            
            <div class="card">
              <img width="400" src={third} alt="third" className="img" />
              <div class="card-body">
                <h5 class="card-title">5 Best Cities to Move to-Pandemic and All</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <br />
                <br />
                <NavLink to={`/show`}><Button>Read More</Button></NavLink> 
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>     
        </div>
      </div>
    )
  }
}
export default Home