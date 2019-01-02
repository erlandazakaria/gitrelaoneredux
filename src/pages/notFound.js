import React, { Component } from 'react'

class notFound extends Component{
    constructor(props){
        super(props);
        this.param  = props.match.params.param;
    }

    render(){
        return <h1>Page Not Found : { this.param }</h1>
    }
}

export default notFound