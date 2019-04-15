import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
      setTimeout(() => {
          alert("Saved data to the cloud");
      }, 1000);
    }, []);

    let assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(" ")}>Thiss is really working!</p>
            <button 
            onClick={props.clicked}
            >Switch name</button>
        </div>
    );
}

export default cockpit;