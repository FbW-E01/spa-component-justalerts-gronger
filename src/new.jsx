import React, { Component } from 'react'

export default class ShowBox extends Component {
    constructor() {
        super();
        this.state = {Box};
    }
    boxVisible = () => {
        this.setState({Box: !hidden})
        console.log("click");
    }

    render() {
        return (
           {jsx}
        )
    }
}

