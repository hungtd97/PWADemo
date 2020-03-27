import React from 'react';
import "../../assets/css/style.scss";
import "../../assets/css/bootstrap.min.css";
import logo from '../../assets/image/logo.png'
export default class HomeScreen extends React.Component {

    navigate = () => {
        //@ts-ignore
        this.props.history.push('/employee')
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={logo} />
                    </div>
                    <span>HomeScreen</span>
                </div>
                <div>
                    <button onClick={this.navigate}>Navigate to Employee</button>
                </div>
            </div>
        )
    }
}