import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    render () {
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                key={person.id}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(person.id)}
            />;
        });
    }

    componentWillUnmount() {
        
    }
}

export default Persons;