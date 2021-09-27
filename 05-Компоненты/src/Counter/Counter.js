import React from 'react';

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    upCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState)=> {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    downCounter = () => {
        this.setState((prevState)=> {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.upCounter}>+</button>
                <button onClick={this.downCounter}>-</button>
            </div>
        )
    }
}
