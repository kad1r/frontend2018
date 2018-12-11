import React from 'react'
import SearchFlight from '../SearchFlight'
import './brand.scss'

const Brand = () => {
  return (
    <div className="d-flex align-items-center justify-content-center brand">
      <SearchFlight
        isBrand={true}
        flightFromPlace={'ADB'}
        flightToPlace={'SAW'}
        flightFromDate={'11/10/2018'}
        flightToDate={'12/10/2018'}
        personNumber={2}
      />
    </div>
  )
}

export default Brand
