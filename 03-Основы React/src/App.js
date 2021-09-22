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

    state = {
        cars: [
            {name:'Ford', year: 2019},
            {name:'Audi', year: 2016},
            {name:'BMW', year: 2015},
        ],
        pageTitle: 'React Components',
        showCars: false
    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars
        })
    }

    toggleCarsHandler = ()=> {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()

        cars.splice(index, 1)

        this.setState({cars})

    }

    render() {
        const divStyle = {
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

                { this.state.showCars ?
                    this.state.cars.map((car, index)=> {
                    return (
                        <Car
                            name={car.name}
                            year={car.year}
                            key={index}
                            onChangeName={(e)=> this.onChangeName(e.target.value, index)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    )
                })
                : null
                }
            </div>
        );
    }
}

export default App;
