import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greetings() {
  return (
    <>
      <div className="">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">Hi</a>
          </li>
          <img src="" alt="" />
          <input type="text" name="" id="" />
        </ul>
      </div>
      <div>
        <Person />
        <Message />
      </div>
    </>
  );
}

const Person = () => <h2>John doe</h2>;

const Message = () => {
  return <p>this is my message</p>;
};

// const Greetings = () =>
//   React.createElement("div", {}, React.createElement("h1", {}, "hello world"));

ReactDom.render(<Greetings />, document.getElementById("root"));
