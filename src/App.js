import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28, id: "2121"},
      {name: "Yuriy", age: 27, id: "21134"},
      {name: "Serj", age: 26, id: "sddw212"},
    ],
    showPersons: false
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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }
    
    let persons = null;

    if ( this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(person.id)}
            />
          })}
      </div>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
        <div className="App">
          <p className={classes.join(" ")}>This is really working!</p>
          <button 
            onClick={this.toglePersonHandler}
            style={style}
          >Switch name</button>
          {persons}
        </div>
    );
  }
}

export default App;
