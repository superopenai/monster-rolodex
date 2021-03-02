import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card/cardList'

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchRes: ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
            .then(users => this.setState({monsters: users}))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="App">
                <input type='search' placeholder='search monster'
                       onChange={event => {
                           this.setState({searchRes: event.target.value},)
                       }
                       }
                />
                <CardList monsters={this.state.monsters}>
                </CardList>

            </div>
        );
    }
}

export default App;