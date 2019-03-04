import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import marked from 'marked';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '# Preview!',
        };
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);

    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });

    }

    update() {
        console.log("update called!");
        console.log(this.state.input);
        document.getElementById('preview').innerHTML =
            marked(this.state.input);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>

                <Editor input={this.state.input} handleChange={this.handleChange} />
                <Preview input={this.state.input} update={this.update} />
            </div>
        );
    }
}

export default App;
