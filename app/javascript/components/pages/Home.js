import React from "react"
import { Button, Card, CardTitle, Col, Row} from "reactstrap"
import {NavLink} from "react-router-dom" 

class Home extends React.Component {
  render() {
    return(
      <div className="page-body">
        <h3>We Create a Apartment Community For All</h3> 
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
        <NavLink to={`/index`}><Button>See All Apartments</Button></NavLink> 
        <NavLink to={`/new`}><Button>Add Apartment</Button></NavLink>                     
        <br/>
        <br/>
        <br/>
        <div className="gallery">                              
          <h4>Apartment Gallery</h4>
          <br/>
          <br/>

        </div>
      </div>
    )
  }
}
export default Home