import React from 'react'
import FlightOption from '../FlightOption'
import Button from '../Button'
import classNames from 'classnames'
import './search-flight.scss'

const SearchFlight = props => {
  const { isBrand } = props
  const searchFlightClassNames = classNames({
    'row search-flight': true,
    'search-flight-brand xm-xs-flex-fill flex-fill': isBrand,
  })
  const hideMobile = classNames({
    'd-none d-md-block d-lg-block d-xl-block': true,
  })
  const buttonKind = isBrand ? 'light-blue' : 'red'
  return (
    <div className={searchFlightClassNames}>
      <div className="col-12">
        <div className="container">
          {isBrand && (
            <div className="brand-text d-block">En uygun bileti hemen bul</div>
          )}

          <div className="search-area d-flex justify-content-between align-items-center position-relative">
            <FlightOption
              className={hideMobile}
              size="big"
              optionData={{
                flightFromPlace: props.flightFromPlace,
              }}
            />
            <FlightOption
              className={hideMobile}
              size="big"
              optionData={{
                flightToPlace: props.flightToPlace,
              }}
            />
            <FlightOption
              className={hideMobile}
              size="big"
              optionData={{
                flightFromDate: props.flightFromDate,
              }}
            />
            <FlightOption
              className={hideMobile}
              size="big"
              optionData={{
                flightToDate: props.flightToDate,
              }}
            />
            <FlightOption
              className={hideMobile}
              size="small"
              optionData={{
                personNumber: props.personNumber,
              }}
            />
            <Button
              kind={buttonKind}
              size="big"
              className="flight-option-button"
            >
              {isBrand ? 'Bilet Ara' : 'Yeniden Ara'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFlight
