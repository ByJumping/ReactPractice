import React from 'react';
import './Car.css';

class Car extends React.Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('UNSAFE_componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps, nextState);
        return true
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        const inputClasses = ['input']
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if(this.props.name.length > 4) {
            inputClasses.push('bold')
        }


        return (
            <div className="Car">
                <h3>Car name: {this.props.name}</h3>
                <p>Number: <strong style={{color: 'brown'}}>{this.props.year}</strong></p>
                <input
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}

                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
}
// function Car() {
//     return (
//         <h2>This is Car Component</h2>
//     )
// }
// const car = () => {
//     return (
//         <h2>This is Car Component</h2>
//     )
// }

export default Car;
