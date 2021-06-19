import React from "react";
import ReactDOM from "react-dom";

export function HelloReact(): JSX.Element {
  return <p>Hello React</p>;
}

ReactDOM.render(<HelloReact />, document.querySelector("#contentStub"));
