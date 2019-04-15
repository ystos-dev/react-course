import React, { Component } from 'react';
import cssClasses from './App.css';
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {

  constructor(props) {
    console.log("construct");

    super(props);
    this.state = {
      persons: [
        {name: "Max", age: 28, id: "2121"},
        {name: "Yuriy", age: 27, id: "21134"},
        {name: "Serj", age: 26, id: "sddw212"},
      ],
      showPersons: false
    }
  }

  static getDeriviedStateFromProps(props, state) {
    console.log("getDeriviedStateFromProps");
    return state;
  }

  switchNameHandler = () => {
  
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    });
  }

  toglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
     });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log("render");
    let persons = null;

    if ( this.state.showPersons) {
      persons = (
        <div>
            <Persons 
              persons={this.state.persons}
              changed={this.nameChangedHandler}
              clicked={this.deletePersonHandler}
            />
      </div>
      );
    }

    return (
        <div className={cssClasses.App}>
          <Cockpit 
            clicked={this.toglePersonHandler}
            persons={this.state.persons}
            />
          {persons}
        </div>
    );
  }
}

export default App;
