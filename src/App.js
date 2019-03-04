import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
// import 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
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
        <div className="App">
            <header className="App-header">
            </header>
            {/*
                <textarea value={this.state.input} onChange={this.handleChange}
                       rows="4" cols="50"/>
            <h1>{this.state.input}</h1>
            */}

          <Editor input={this.state.input} handleChange={this.handleChange}/>
          <Preview input={this.state.input}/>
      </div>
    );
  }
}

export default App;
