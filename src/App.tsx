import React, { Component } from "react";

interface CounterProps {
  defaultCount: number;
}

interface CounterState {
  count: number;
}
export default class App extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.defaultCount,
    };
  }

  state: CounterState;

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
