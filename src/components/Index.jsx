import { Component } from "react";
import Title from "./Title";
import FirstName from "./FirstName";
import LastName from "./LastName";

class Index extends Component{
    firstName=(fname)=>{
        return <h1>{fname}</h1>
    }
    lastName=(lname)=>{
        return <h1>{lname}</h1>
    }
    render(){
        return(
            <>
                <Title>Thinking: React Composition</Title>
                <FirstName>{this.firstName}</FirstName>
                <LastName>{this.lastName}</LastName>
            </>
        )
    }
}
export default Index;