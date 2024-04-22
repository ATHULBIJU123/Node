import { Component } from "react";

class Counter extends Component {
    constructor (props) {
        super(props);//Class super keyword      (Refer object orientation in Javascipt)
        this.state = {count : 0};
    }

    increment = () => {
        this.setState({count : this.state.count + 1});
    }

    render(){
        {console.log("Component Rendering..");}
        return(
            <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={this.increment}>Incement Count</button>
            </>
        )
    }
}

export default Counter;