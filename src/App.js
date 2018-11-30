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
  render() {
    const {handleUpClick, handleDownClick, handleReset, item, count} = this.props;
    return (
      <div className="ui segment">
        <h2>{item}: {count}</h2>
        <Button onClick={handleUpClick}>+1</Button>
        <Button onClick={handleDownClick}>-1</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    )
  }
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = _.reduce(props.items, (acc, item) => {acc[item] = 0; return acc;}, {});
  };
  handleUpClick(item) {
    this.setState({[item]: this.state[item] + 1})
  }
  handleDownClick(item) {
    this.setState({[item]: this.state[item] - 1})
  }
  handleReset(item) {
    this.setState({[item]: 0})
  }
  render() {
    const {items} = this.props;
    const total = _.reduce(this.state, (acc, item) => {return acc + item}, 0);
    return (
      <React.Fragment>
        {_.map(items, (item) => <Counter item={item} count={this.state[item]} handleDownClick={() => this.handleDownClick(item)} handleUpClick={() => this.handleUpClick(item)} handleReset={() => this.handleReset(item)} />)}
        <div className="ui segment">
          <h2>TOTAL: {total}</h2>
        </div>
      </React.Fragment>
    );
  }
};

export {ShoppingCart};