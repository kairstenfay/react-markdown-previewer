import React, { Component } from 'react';
// import * as quoteActions from '../actions/quote';
// import Quote from './Quote';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'test',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}
                      rows="4" cols="50" />
        );
    }

}