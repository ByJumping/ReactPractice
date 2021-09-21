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

const car = ({name, year, children}) => (
    <div>
        <h3>Car name: {name}</h3>
        <p>Number: <strong style={{color: 'brown'}}>{year}</strong></p>
        {children}
    </div>
)

export default car
