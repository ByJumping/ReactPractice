import React from 'react';
import './Car.css';
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

const car = (props) => {
    const inputClasses = ['input']
    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if(props.name.length > 4) {
        inputClasses.push('bold')
    }


    return (
        <div className="Car">
            <h3>Car name: {props.name}</h3>
            <p>Number: <strong style={{color: 'brown'}}>{props.year}</strong></p>
            <input
                className={inputClasses.join(' ')}
                type="text"
                onChange={props.onChangeName}
                value={props.name}

            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}


export default car;
