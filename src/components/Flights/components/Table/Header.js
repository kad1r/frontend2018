import React from 'react'
import Table from './Table'
import classNames from 'classnames'

const Cell = props => {
  const { data } = props

  return (
    <div className="row flights-header d-none d-md-flex">
      {data.map((headerElement, index) => {
        const cellClassName = classNames({
          'table-header-text': true,
          'box-fix':
            headerElement.text === 'Fiyat' || headerElement.text === 'Satın Al',
        })
        return (
          <Table.Cell key={index} desktopCol="2" className={cellClassName}>
            {headerElement.text}
          </Table.Cell>
        )
      })}
    </div>
  )
}

export default Cell
