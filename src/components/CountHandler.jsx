import { Component } from "react";

class CountHandler extends Component{
    state={
        count: 0
    }
    countHandler=()=>{
        this.setState((prevState) => ({count: prevState.count+1}));
    }
    render() {
        const {count} = this.state;
        const {children} = this.props;
        return children(count, this.countHandler);
    }
}

export default CountHandler;