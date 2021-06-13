import React, { Component } from "react";

interface CounterProps {
  defaultCount: number;
}

interface CounterState {
  count: number;
}

// type annotation for this.props
// type annotation for this.setState() and return type
export default class App extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.defaultCount,
    };
  }

  // type annotation for this.state
  state: CounterState;

  // we have to explicitly annotate lifeCycle method arguments
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    console.log("I am updating");
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count {count}</h1>
        <button
          onClick={() => {
            this.setState(({ count }) => ({ count: count - 1 }));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState(({ count }) => ({ count: count + 1 }));
          }}
        >
          +
        </button>
      </div>
    );
  }
}
