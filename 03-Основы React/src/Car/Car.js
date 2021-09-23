import React from 'react';
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

const car = (props) => (
    <div className="car">
        <h3>Car name: {props.name}</h3>
        <p>Number: <strong style={{color: 'brown'}}>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

export default car
