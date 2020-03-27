import React from 'react';
import "../../assets/css/style.scss";

export default class HomeScreen extends React.Component {

    navigate = () => {
        //@ts-ignore
        this.props.history.push('/employee')
    }

    render() {
        return (
            <div>
                <div>
                    HomeScreen
            </div>
                <div>
                    <button onClick={this.navigate}>Navigate to Employee</button>
                </div>
            </div>
        )
    }
}