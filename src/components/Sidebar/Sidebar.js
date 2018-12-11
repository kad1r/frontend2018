import React from 'react'
import { Content } from '../Content'
import Checkbox from '../Checkbox'
import RangeSlider from '../RangeSlider'
import './sidebar.scss'
import { getFormattedHourAndMinuteText } from '../../helpers'

const checkboxData = {
  transfer: [
    {
      id: 'aktarmasiz',
      value: 'Aktarmasız',
      isChecked: true,
    },
    {
      id: '1aktarma',
      value: '1 Aktarma',
      isChecked: false,
    },
    {
      id: '2aktarma',
      value: '2+ Aktarma',
      isChecked: false,
    },
  ],
  class: [
    {
      id: 'ekonomi',
      value: 'Ekonomi',
      isChecked: true,
    },
    {
      id: 'business',
      value: 'Business',
      isChecked: false,
    },
    {
      id: 'kurumsal',
      value: 'Kurumsal',
      isChecked: false,
    },
  ],
  company: [
    {
      id: 'turkishAirlines',
      value: 'Turkish Airlines',
      isChecked: true,
    },
    {
      id: 'pegasusAirlines',
      value: 'Pegasus Airlines',
      isChecked: false,
    },
    {
      id: 'borajet',
      value: 'Borajet',
      isChecked: false,
    },
  ],
}

class Sidebar extends React.Component {
  state = {
    price: 120,
    time: 75,
    transfer: checkboxData.transfer,
    company: checkboxData.company,
    class: checkboxData.class,
  }

  constructor(props) {
    super(props)

    this.onChangeCheckboxState = this.onChangeCheckboxState.bind(this)
    this.onRangeChange = this.onRangeChange.bind(this)
  }

  onChangeCheckboxState(id, dataName) {
    //We need to use clonedeep or like clonedeep function for immutable object. This is only example.
    let newState = { ...this.state }

    newState[dataName][id]['isChecked'] = !this.state[dataName][id]['isChecked']

    this.setState(state => {
      return newState
    })
  }

  onRangeChange(value, data) {
    let newState = { ...this.state }

    newState[data] = value

    this.setState(state => {
      return newState
    })
  }

  getCheckboxes(data, dataName) {
    return data.map((checkbox, i) => {
      return (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          value={checkbox.value}
          checked={this.state[dataName][i]['isChecked']}
          onChangeCheckboxState={() => this.onChangeCheckboxState(i, dataName)}
        />
      )
    })
  }
  render() {
    return (
      <div className="col-md-3 d-none d-md-block .d-lg-block d-xl-block">
        <Content>
          <React.Fragment>
            <Content.Container>
              <Content.Header between={true}>
                <Content.Title text="Aktarma" type="sidebar" uppercase={true} />

                <Content.Action type="select-all" underline={true}>
                  Tümünü seç
                </Content.Action>
              </Content.Header>

              {this.getCheckboxes(checkboxData.transfer, 'transfer')}
            </Content.Container>
            <Content.Separator />
          </React.Fragment>

          <React.Fragment>
            <Content.Container>
              <Content.Header between={true}>
                <Content.Title text="Sınıf" type="sidebar" uppercase={true} />

                <Content.Action type="select-all" underline={true}>
                  Tümünü seç
                </Content.Action>
              </Content.Header>

              {this.getCheckboxes(checkboxData.class, 'class')}
            </Content.Container>
            <Content.Separator />
          </React.Fragment>

          <React.Fragment>
            <Content.Container>
              <Content.Header start={true}>
                <Content.Title
                  type="sidebar"
                  info={`${this.state.price} TL`}
                  text="Max Fiyat"
                  uppercase={true}
                />
              </Content.Header>

              <RangeSlider
                min={1}
                max={260}
                value={this.state.price}
                onRangeChange={e => this.onRangeChange(e.target.value, 'price')}
              />
            </Content.Container>
            <Content.Separator />
          </React.Fragment>

          <React.Fragment>
            <Content.Container>
              <Content.Header start={true}>
                <Content.Title
                  type="sidebar"
                  info={getFormattedHourAndMinuteText(this.state.time)}
                  text="Max Uçuş Süresi"
                  uppercase={true}
                />
              </Content.Header>

              <RangeSlider
                min={1}
                max={260}
                value={this.state.time}
                onRangeChange={e => this.onRangeChange(e.target.value, 'time')}
              />
            </Content.Container>
            <Content.Separator />
          </React.Fragment>

          <React.Fragment>
            <Content.Container>
              <Content.Header between={true}>
                <Content.Title
                  text="Havayolu"
                  type="sidebar"
                  uppercase={true}
                />

                <Content.Action type="select-all" underline={true}>
                  Tümünü seç
                </Content.Action>
              </Content.Header>

              {this.getCheckboxes(checkboxData.company, 'company')}
            </Content.Container>
            <Content.Separator />
          </React.Fragment>
        </Content>
      </div>
    )
  }
}

export default Sidebar
