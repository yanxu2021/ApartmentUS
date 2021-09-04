import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import { NotFound } from './pages/NotFound'
import New from './pages/New'
import Edit from './pages/Edit'
import Index from './pages/Index'
import Show from './pages/Show'
import MyApartment from './pages/MyApartment'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartment()
  }

  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("index errors:", errors))
  }

  createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readApartment())
    .catch(errors => console.log("create errors:", errors))
  }

  editApartment = (apartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readApartment())
    .catch(errors => console.log("edit errors:", errors))
  }

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>

          <Route exact path="/" render={(props) => {
            return <Home {...this.props} />
          }}/>

          <Route exact path="/about" component={AboutUs} />

          <Route path="/index" render={(props) => {
            return <Index apartments={this.state.apartments} />
          }}/>

          <Route path="/show/:id" render={ (props) => {
            let id = +props.match.params.id
            let apartment = this.state.apartments.find(a => a.id === id)
            return <Show apartment={apartment} />
          }}/>

          {this.props.logged_in &&
            <Route path="/new" render={(props) => {
              return <New readApartment={this.readApartment}
              createApartment={this.createApartment} current_user={this.props.current_user} />
            }}/>
          }

          {this.props.logged_in &&
            <Route path="/myapartments" render={(props) => {
              let apartments = this.state.apartments.filter(a => a.id === this.props.current_user.id)
              return <MyApartment apartments={apartments} />
            }}/>
          }

          {this.props.logged_in &&
            <Route path="/edit/:id" render={(props) => {
              let apartment = this.state.apartments.find(apartment => apartment.id === +props.match.params.id)
              return (
                <Edit
                  editApartment={this.editApartment}
                  current_user={this.props.current_user}
                  apartment={apartment}
                />
              )
            }}/> 
          }

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App