import React from 'react'
import {Content} from '../Content'
import Checkbox from '../Checkbox'
import RangeSlider from '../RangeSlider'
import './sidebar.scss'

const checkboxData = {
    transfer: [
        {
            id:'',
            value:'',
            isChecked: false
        }
    ]
}

class Sidebar extends React.Component {
    state = {
        isChecked: true,
        range: 120,
    }

    constructor(props) {
        super(props)

        this.onChangeCheckboxState = this.onChangeCheckboxState.bind(this)
        this.onRangeChange = this.onRangeChange.bind(this)
    }

    onChangeCheckboxState(id) {
        this.setState({
            transfer: {
                ...this.state.transfer,
                [id]: this.state.transfer[id] ? !this.state.transfer[id] : true
            }
        })
    }

    onRangeChange(e) {
        this.setState({range: e.target.value})
    }

    getCheckboxes(data){
        return data.map((checkbox)=> {
            return <Checkbox
                id={'aktarmasiz'}
                value="Sadece Aktarmasız"
                checked={this.state.transfer['aktarmasiz']}
                onChangeCheckboxState={e => this.onChangeCheckboxState(e.target.id)}
            />
        })
    }
    render() {
        return (
            <div className="col-md-3 d-none d-md-block .d-lg-block d-xl-block">
                <Content>
                    <React.Fragment>
                        <Content.Container>
                            <Content.Header between={true}>
                                <Content.Title text="Aktarma" type="sidebar" uppercase={true}/>

                                <Content.Action type="select-all" underline={true}>
                                    Tümünü seç
                                </Content.Action>
                            </Content.Header>

                            {}

                        </Content.Container>
                        <Content.Separator/>
                    </React.Fragment>

                    <React.Fragment>
                        <Content.Container>
                            <Content.Header between={true}>
                                <Content.Title text="Sınıf" type="sidebar" uppercase={true}/>

                                <Content.Action type="select-all" underline={true}>
                                    Tümünü seç
                                </Content.Action>
                            </Content.Header>

                            <Checkbox
                                id={'ekonomi'}
                                value="Ekonomi"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                            <Checkbox
                                id={'bussines'}
                                value="Bussines"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                            <Checkbox
                                id={'kurumsal'}
                                value="Kurumsal"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                        </Content.Container>
                        <Content.Separator/>
                    </React.Fragment>

                    <React.Fragment>
                        <Content.Container>
                            <Content.Header start={true}>
                                <Content.Title
                                    type="sidebar"
                                    info={`${this.state.range} TL`}
                                    text="Max Fiyat"
                                    uppercase={true}
                                />
                            </Content.Header>

                            <RangeSlider
                                min={1}
                                max={260}
                                value={this.state.range}
                                onRangeChange={this.onRangeChange}
                            />
                        </Content.Container>
                        <Content.Separator/>
                    </React.Fragment>

                    <React.Fragment>
                        <Content.Container>
                            <Content.Header start={true}>
                                <Content.Title
                                    type="sidebar"
                                    info={`${this.state.range} DAKİKA`}
                                    text="Max Uçuş Süresi"
                                    uppercase={true}
                                />
                            </Content.Header>

                            <RangeSlider
                                min={1}
                                max={260}
                                value={this.state.range}
                                onRangeChange={this.onRangeChange}
                            />
                        </Content.Container>
                        <Content.Separator/>
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

                            <Checkbox
                                id={'turkishAirlines'}
                                value="Turkish Airlines"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                            <Checkbox
                                id={'pegasusAirlines'}
                                value="Pegasus Airlines"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                            <Checkbox
                                id={'borajet'}
                                value="Borajet"
                                checked={this.state.isChecked}
                                onChangeCheckboxState={this.onChangeCheckboxState}
                            />
                        </Content.Container>
                        <Content.Separator/>
                    </React.Fragment>
                </Content>
            </div>
        )
    }
}

export default Sidebar
