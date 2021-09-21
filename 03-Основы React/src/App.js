import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }
        return (
                <div style={divStyle}>
                    <h1>Hello World!</h1>

                    <Car name={'Ford'} year={2019}/>
                    <Car name={'Audi'} year={2016}/>
                    <Car name={'BMW'} year={2016}>
                        <p style={{color: 'red'}}>Color</p>
                    </Car>
                </div>
        );
    }
}

export default App;
