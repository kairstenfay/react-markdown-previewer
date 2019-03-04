import React, { Component } from 'react';

export default class Preview extends Component {

    componentWillReceiveProps() {
        this.props.update();
    }

    componentDidMount() {
        this.props.update();
    }

    render() {
        return (
            <div id="preview">
            </div>
        );
    }

}