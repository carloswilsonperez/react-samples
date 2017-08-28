
import React from 'react';
import 'babel-polyfill';
import './index.css';


class Question extends React.Component {
  render() {
    return (
      <div className = "question">
        What is {this.props.operator1} x {this.props.operator2}
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="buttonAnswer" onClick={() => this.props.handler(this.props.value)}>
          {this.props.value}
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    let value1 = this.props.result;
    let value2 = value1 + 1;
    let value3 = value1 + 2;
    let value4 = (value1 - 1) > 0 ? value1 - 1 : value1 + 3;

    let buttons = [];

    buttons.push(<Button value={value1} handler={this.props.clickHandler} />);
    buttons.push(<Button value={value2} handler={this.props.clickHandler} />);
    buttons.push(<Button value={value3} handler={this.props.clickHandler} />);
    buttons.push(<Button value={value4} handler={this.props.clickHandler} />);

    //Randomize the order of the buttons
    buttons.sort(function() {
      return .5 - Math.random();
    });

    return (
      <div>
        {buttons}
      </div>
    )
  }
}

function Correct(props) {
  return (
    <div className = "correct">Correct: {props.counter}</div>
  )
}

function Incorrect(props) {
  return (
    <div className = "incorrect">Incorrect: {props.counter}</div>
  )
}

class Game extends React.Component {
  constructor(props){
    super(props)
    //initial state set up
    this.state = {
      operator1: null,
      operator2: null,
      result: null,
      correct: 0,
      incorrect: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    this.setState({
        operator1: Math.floor(Math.random() * 10),
        operator2: Math.floor(Math.random() * 10),
      }, () => this.setState({result: this.state.operator1 * this.state.operator2 })
    );

  }

  componentDidMount(){
    //updating state, define operators and
  }

  clickHandler(value) {
    //Check if result is correct, and update counters
    if (value === this.state.result) {
      this.setState({correct: this.state.correct + 1});
    } else {
      this.setState({incorrect: this.state.incorrect + 1});
    }

    //Generate a new row of questions
    this.setState({
        operator1: Math.floor(Math.random() * 10),
        operator2: Math.floor(Math.random() * 10),
      }, () => this.setState({result: this.state.operator1 * this.state.operator2 })
    );
  }

  render(){
    return (
      <div>
        <Question operator1 = {this.state.operator1}
                  operator2 = {this.state.operator2} result={this.state.result} />
        <Options operator1 = {this.state.operator1}
                 operator2 = {this.state.operator2} result={this.state.result}
                 clickHandler = {this.clickHandler} />
        <Correct counter = {this.state.correct} />
        <Incorrect counter = {this.state.incorrect} />
      </div>
    )
  }
}

export default Game;