import React from 'react';
import axios from 'axios'

export default class EmployeeScreen extends React.Component {

    state = {
        data: [],
        err: ''
    }

    componentDidMount() {
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                console.log('response', response.data.data)
                this.setState({ data: response.data.data })
            })
            .catch((err) => {
                console.log('err', err)
                this.setState({ err: err })
            })
    }

    render() {
        return (
            <div>
                Hello Adamo
                <div>{this.state.err}</div>
                <div>
                    {this.state.data.map(a => {
                        return (
                            //@ts-ignore
                            <div className="name" key={a.id}>Name: {a.employee_name}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}