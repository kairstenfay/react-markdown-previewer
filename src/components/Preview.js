import React, { Component } from 'react';
import marked from 'marked';

export default class Preview extends Component {

    componentWillReceiveProps() {
        console.log("receiving props");
        this.props.update();
    }

    componentDidMount() {
        console.log("component mounted");
        this.props.update();
    }

    render() {

        return (
            <div id="preview">
            </div>
        );
    }

}