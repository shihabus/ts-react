import React, { Component } from "react";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: props.defaultCount,
    };
  }
  render() {
    const { count }: any = this.state;
    return (
      <div>
        <h1>Count {count}</h1>
        <button
          onClick={() => {
            this.setState(({ count }: any) => ({ count: count - 1 }));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState(({ count }: any) => ({ count: count + 1 }));
          }}
        >
          +
        </button>
      </div>
    );
  }
}
