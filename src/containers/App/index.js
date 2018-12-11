import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import SearchFlight from '../../components/SearchFlight'
import Sidebar from '../../components/Sidebar/Sidebar'
import Flights from '../../components/Flights/Flights'
import Brand from '../../components/Brand'
import './App.scss'
import Filters from '../../components/Filters'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <SearchFlight
          flightFromPlace={'ADB'}
          flightToPlace={'SAW'}
          flightFromDate={'11/10/2018'}
          flightToDate={'12/10/2018'}
          personNumber={2}
        />

        <div className="container mx-auto">
          <div className="row">
            <div className="col-12">
              <Filters />
            </div>
            <Sidebar />
            <Flights />
          </div>
        </div>
        <Brand />
      </React.Fragment>
    )
  }
}

export default Index
