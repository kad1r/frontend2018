import React from 'react'
import Dropdown from '../Dropdown'

const menuData = [
  { id: 'ascFiyat', text: 'Ucuzdan Pahalıya' },
  { id: 'descFiyat', text: 'Pahalıdan Ucuza' },
]

class Filters extends React.Component {
  state = {
    isOpen: false,
    activeMenu: menuData[0],
  }

  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    let activeIndex = menuData.findIndex(
      menuItem => menuItem.id === e.target.id
    )

    this.setState({ activeMenu: menuData[activeIndex], isOpen: false })
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div className="d-flex justify-content-between filter-section">
        <div className="filter-count-text d-none d-md-block">
          25 Uçuş Listeleniyor
        </div>
        <div className="d-flex justify-content-center align-items-center xm-xs-flex-fill">
          <div className="mr-4 filter-order-text d-none d-md-block">
            Sıralama
          </div>
          <Dropdown
            type="filter"
            visible={this.state.isOpen}
            data={menuData}
            active={this.state.activeMenu}
            onSelect={this.onSelect}
            onClick={() => this.toggleMenu()}
          />
        </div>
      </div>
    )
  }
}

export default Filters
