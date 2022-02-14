import React from 'react';
import ReactDom from 'react-dom';

function Greetings() {
  return <h4>I'm Samuel and this is my firts components</h4>;
}

ReactDom.render(<Greetings />, document.getElementById('root'));