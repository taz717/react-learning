import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    // pre defined
    state = {
        persons: [
            { name: 'taz', age: 18 },
            { name: 'Manu', age: 30 },
            { name: 'app', age: 0 },
        ],

        otherState: 'some information'
    }

    switchNameHandler = () => {
        // console.log('Was clicked!');
        this.setState({
            persons: [
                { name: 'Moataz', age: 18 },
                { name: 'Manu', age: 30 },
                { name: 'app', age: 0 },
            ]
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>Hi I'm a react app</h1>
                <p> testing jsx restrictions</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: racing </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                {/* <Person name='test' age={Math.floor(Math.random() * 30)} /> */}

            </div>

        );

        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi I\'m a react app!!!')); This is another way to write the same code, and it shows that how we are using jsx while it may not look like it
    }
}

export default App;
