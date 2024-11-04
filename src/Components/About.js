import UserComponentClass from "./UserComponentClass";
import React from "react";

class About extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>Iam About Page</h1>
                {/* <UserComponent name="Manoj" /> */}
                <UserComponentClass name="First" />
                
            </div>
        );
    }
}

export default About;