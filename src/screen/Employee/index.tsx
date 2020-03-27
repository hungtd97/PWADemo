import React from 'react';
import axios from 'axios'
import Today from '../Today/Today'

export default class EmployeeScreen extends React.Component {

    state = {
        data: [],
        err: ''
    }

    componentDidMount() {
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                console.log('response', response.data.data)
                console.log('before setStatee')
                this.setState({ data: response.data.data }, () => {
                    console.log('after setState')
                })
            })
            .catch((err) => {
                console.log('err', err)
                this.setState({ err: err })
            })
    }

    renderItem = () => {
        const { data } = this.state
        console.log('data', data);
        {
            data.map(a => {
                return (
                    //@ts-ignore
                    <div className="col-md-3 name" key={a.id}><span>Name: {a.employee_name}</span></div>
                )
            })
        }
    }

    render() {

        return (
            <div>
                <span>Hello Adamo</span>
                <div>{this.state.err}</div>
                <Today />
                <div className="row mr-0 ml-0">
                    {this.renderItem}
                </div>
            </div>
        )
    }
}