import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MyApartment extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>My Apartments</h3>
        <br />
        <br />
        <Row className="cards">
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card key={apartment.id}>
                <div>
                    {apartment.street}
                </div>
                <div>
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/show/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
                <br />
                <br />
                <NavLink to={`/edit/${apartment.id}`}>
                  <Button>Edit Listing</Button>
                </NavLink>
              </Card>
            )
          })}
        </Row>
      </div>
    )
  }
}
export default MyApartment