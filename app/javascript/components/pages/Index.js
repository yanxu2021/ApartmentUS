import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import img from '../assets/img.jpg'

class Index extends Component{
  render(){
      let {apartments} = this.props
      return(
      <div className="page-body">
          <h3>All the Apartments</h3>
          <div className="index-cards">
          {apartments && apartments.map(apartment =>{
              return(
                  <Row key={apartment.id} className="cards">
                      <Col md="800">
                          <Card body>
                              <CardTitle tag="h4">{apartment.street}</CardTitle>
                              <CardTitle tag="h4">{apartment.city}, {apartment.state}</CardTitle>
                              <img width="550" src={img} alt="img" className="img" />
                              <br />
                              <br />
                              <NavLink to={`/show/${apartment.id}`}><Button>More Info</Button></NavLink>
                          </Card>
                      </Col>
                  </Row>
              )
          })}
          </div>
      </div>
      )
  }
}

export default Index