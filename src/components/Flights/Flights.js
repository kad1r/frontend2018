import React from 'react'
import PropTypes from 'prop-types'
import { Content } from '../Content'
import { Table } from './components/Table'
import flightData from '../../assets/DATA.json'
import './flights.scss'
import { getFormattedDiffTime, getFormattedHourAndMinute } from '../../helpers'
import Button from '../Button'

const tableHeaderData = [
  { text: 'Havayolu' },
  { text: 'Kalkış' },
  { text: 'Varış' },
  { text: 'Aktarma / Süre' },
  { text: 'Fiyat' },
  { text: 'Satın Al' },
]

function getAirlines(airlinesData) {
  let airlines = null

  if (airlinesData.length > 1) {
    airlines = (
      <Table.Cell
        className={'table-body-text order-1'}
        desktopCol={2}
        mobileCol={6}
        content={true}
      >
        {airlinesData.map((airline, index) => {
          return (
            <div className="flight-company-list-text" key={index}>
              {airline.Name}
            </div>
          )
        })}
      </Table.Cell>
    )
  } else {
    airlines = (
      <Table.Cell
        className={'table-body-text order-1'}
        desktopCol={2}
        mobileCol={6}
        content={true}
      >
        <img src={airlinesData[0].ImageUrl} width="100%" alt="airline" />
      </Table.Cell>
    )
  }

  return airlines
}

function getDepartureAndArrivalTimes(departureAndArriveData) {
  let departure = {
    time: new Date(departureAndArriveData.Departure),
    station: departureAndArriveData.OriginStation,
  }
  let arrival = {
    time: new Date(departureAndArriveData.Arrival),
    station: departureAndArriveData.DestinationStation,
  }

  return (
    <React.Fragment>
      <Table.Cell
        className="after-icon order-3 flight-departure-and-arrival-section"
        desktopCol={2}
        mobileCol={6}
        content={true}
      >
        <div className="flight-time-text">
          {getFormattedHourAndMinute(departure.time)}
        </div>
        <div className="flight-airport-title-info-text">
          {departure.station.Code}
        </div>
      </Table.Cell>
      <Table.Cell
        className="order-3 flight-departure-and-arrival-section"
        desktopCol={2}
        mobileCol={6}
        content={true}
      >
        <div className="flight-time-text">
          {getFormattedHourAndMinute(arrival.time)}
        </div>
        <div className="flight-airport-title-info-text">
          {arrival.station.Code}
        </div>
      </Table.Cell>
    </React.Fragment>
  )
}

function getTransferAndTime(transferAndTimeData) {
  let departureTime = new Date(transferAndTimeData.Departure)
  let arrivalTime = new Date(transferAndTimeData.Arrival)
  let transferCount = transferAndTimeData.Segments.length
  let transferMessage =
    transferCount > 1 ? `${transferCount} Aktarma` : 'Direkt'

  return (
    <Table.Cell
      className="flight-transfer-and-time-data order-2"
      desktopCol={2}
      mobileCol={6}
      content={true}
    >
      <div className="flight-transfer-text">{transferMessage}</div>
      <div className="flight-airport-title-info-text">
        {getFormattedDiffTime(arrivalTime, departureTime)}
      </div>
    </Table.Cell>
  )
}

function getFlightPriceAndCompany(flightPriceData, flightCompanyData) {
  let minPrice = Math.round(flightPriceData[0].Price)
  let companyName = flightCompanyData.Carrier.Name

  return (
    <Table.Cell
      className="order-4"
      desktopCol={4}
      mobileCol={12}
      content={true}
    >
      <div className="d-flex justify-content-between align-items-center flight-price-section-box">
        <div>
          <div className="flight-price-section-price-text">
            {minPrice + ' TL'}
          </div>
          <div className="flight-airport-title-info-text"> {companyName}</div>
        </div>
        <Button kind="blue" className="m-0">
          İncele
        </Button>
      </div>
    </Table.Cell>
  )
}

function getTableRows(data) {
  let row = null
  let rowData = []

  row = data.Itineraries.map(flight => {
    rowData = []
    rowData.push(getAirlines(flight.OutboundLegId.OperatingCarriers))
    rowData.push(getDepartureAndArrivalTimes(flight.OutboundLegId))
    rowData.push(getTransferAndTime(flight.OutboundLegId))
    rowData.push(
      getFlightPriceAndCompany(
        flight.PricingOptions,
        flight.OutboundLegId.FlightNumbers[0]
      )
    )
    return <Table.Row>{rowData}</Table.Row>
  })

  return row
}

const Flights = props => {
  return (
    <div className="col-12 col-md-9 mx-auto">
      <Content>
        <Table.Header data={tableHeaderData} />
        {getTableRows(flightData.result)}
      </Content>
    </div>
  )
}

Flights.propTypes = {
  name: PropTypes.string,
}

export default Flights
