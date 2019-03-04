import React, { Component } from 'react';

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = { // TODO: make it stateless?
        };
    }

    render() {
        return (
            <div id="preview">
                {this.props.input}
            </div>
        );
    }

}