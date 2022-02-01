
// Adding only javascript with webpack
// console.log("My First Web App");
// document.querySelector('#fromjs').innerHTML = `<h1>From index.js</h1>`;


import React from 'react';
import ReactDOM from 'react-dom';

// without babel preset added it will work
// ReactDOM.render(
//   'Hello from index.js React',
//   document.querySelector(
//     '#fromjs'
//   )
// );

// after adding babel preset
ReactDOM.render(
  <h1>Hello from js Babel</h1>,
  document.querySelector(
    '#fromjs'
  )
);
