import React, { Component } from 'react';

let withCounter=(OriginalComponent)=>{
    class Calculate extends Component {
        state = {
            count: 0
        }
        handleCount=()=>{
            this.setState((prevState)=>({count: prevState.count+1}));
        }
        render() {
            let {count} = this.state;
            return <OriginalComponent value={count} countHandler={this.handleCount}/>
        }
    }
    return Calculate;
}

export default withCounter;