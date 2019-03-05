import React, { Component } from 'react';
// import * as quoteActions from '../actions/quote';
// import Quote from './Quote';

export default class Editor extends Component {

    render() {
        return (
            <div>
                <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}
                          rows="40" cols="50" />
            </div>
        );
    }

}