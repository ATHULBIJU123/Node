import React, {Component} from "react";
import { PureComponent } from "react";

class MyPureComponent extends PureComponent {
    render () {
        console.log("Component rendering...");
        return <div>{this.props.message}</div>
    }
}
export default MyPureComponent