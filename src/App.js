import * as _ from 'lodash-es';
import React from 'react';

class Button extends React.PureComponent {
  render() {
    const {
      onClick,
      ...props
    } = this.props;
    return (
      <div className="ui inverted blue button" onClick={onClick} {...props} />
    );
  }
};

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleClick = () => {
    this.setState({counter: this.state.counter+1});
  };
  render() {
    return (
      <div className="ui segment">
        <h2>Count: {this.state.counter}</h2>
        <Button onClick={this.handleClick}>+1</Button>
      </div>
    )
  }
};

export {Counter};