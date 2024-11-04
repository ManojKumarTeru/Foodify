import React from "react";
import { json } from "react-router-dom";

class UserComponentClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            UserInfo:{
               login:"Hii",
               id:"123"
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/ManojKumarTeru");
        const json=await data.json();
        this.setState({
            UserInfo:json,
        });
    }

    render(){
        const {login,id}=this.state.UserInfo;
        return(
            <div className="user-comp">
                <h1>{login}</h1>
                <h2>{id}</h2>
                <h2>Contact: LinkedIn</h2>
            </div>
        );
    }
}

export default UserComponentClass;