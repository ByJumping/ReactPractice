import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
import Counter from './Counter/Counter';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {name: 'Ford', year: 2019},
                // {name: 'Audi', year: 2016},
                // {name: 'BMW', year: 2015},
            ],
            pageTitle: 'React Components',
            showCars: true
        };

    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars
        });
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    deleteHandler(index) {
        const cars = this.state.cars.concat();

        cars.splice(index, 1);

        this.setState({cars});

    }

    componentWillUnmount() {

    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        const divStyle = {
            textAlign: 'center',
        };
        return (
            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

                {this.state.showCars ?
                    this.state.cars.map((car, index) => {
                        return (
                            <div key={index}
                                 style={{
                                     marginTop: 10,
                                     display: 'flex',
                                     justifyContent: 'center'

                                 }}
                            >
                                <Car
                                    name={car.name}
                                    year={car.year}
                                    onChangeName={(e) => this.onChangeName(e.target.value, index)}
                                    onDelete={this.deleteHandler.bind(this, index)}
                                />
                            </div>
                        );
                    })
                    : null
                }
                <Counter></Counter>
            </div>
        );
    }
}

export default App;
