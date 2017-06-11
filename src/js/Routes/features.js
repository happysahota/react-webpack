import React from "react";

export default class Features extends React.Component {
    render(){
        let {feature} = this.props.params; //es6 fnctionality to pull key out of obj. this will pull 'feature' out of params and assign to 'feature' variable
        console.log(feature);
        return (
            <h1>Features Route</h1>
        );
    }
}