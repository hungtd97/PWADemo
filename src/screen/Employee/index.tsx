import React from 'react';
import axios from 'axios'
import Today from '../Today/Today'

export default class EmployeeScreen extends React.Component {

    state = {
        data: [],
        err: ''
    }
    saveStateToLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(this.state));
    };

    restoreStateFromLocalStorage = () => {
        // @ts-ignore
        const state = JSON.parse(localStorage.getItem('employees'));
        console.log('employee localStorage state', state)
        this.setState(state);
    };

    componentDidMount() {
        if (!navigator.onLine) {
            this.restoreStateFromLocalStorage()
        } else {
            axios.get('https://dummy.restapiexample.com/api/v1/employees')
                .then((response) => {
                    console.log('response', response.data.data)
                    console.log('before setStatee')
                    this.setState({ data: response.data.data }, this.saveStateToLocalStorage)
                })
                .catch((err) => {
                    console.log('err', err)
                    this.setState({ err: err })
                })

        }
    }

    renderItem = () => {
        const { data } = this.state
        console.log('data', data);
        return (
            <>
                <div className="text-light text-center mt-2 mb-2">Number of Employees: {data.length}</div>
                {
                    data.map(a => {
                        return (
                            //@ts-ignore
                            <div className="col-md-3 name" key={a.id}><span>Name: {a.employee_name}</span></div>
                        )
                    })
                }
            </>
        )

    }

    render() {

        return (
            <div>
                <span>Hello Adamo</span>
                <div>{this.state.err}</div>
                <Today />
                <div className="row mr-0 ml-0">
                    {this.renderItem()}
                </div>
            </div>
        )
    }
}