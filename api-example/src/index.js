import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.state.name;

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Enter your name:
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <br />
          <div >
            {
              this.state.isSubmitted ? "Hello " + this.state.name + "." : ""
            }

          </div>
        </div>
      </form>
    );
  }
}

render(<App />, document.getElementById('root'));
