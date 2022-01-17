import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
  
// // const ele = ( 
// //     <div className = 'page'
// //     style = {
// //         { textAlign: 'center' }
// //     }>
// //     <h1 id = 'head'> Never Stop Learning!!! </h1>
// //      <h2 style = {
// //         { color: 'green' }
// //     }> Because life never stops teaching </h2> 
// //     <p> From GeeksforGeeks </p>
   
// //     </div>
// // );
// const ele = React.createElement("div", {
//   className: 'page',
//   style: { textAlign: 'center' }
// },
// React.createElement("h1", { id: 'head' }, "Never Stop Learning!!!"),
// React.createElement("h2", { style: { color: 'green' } }, 
//                   "Because life never stops teaching"),
// React.createElement('p', null, "From GeeksforGeeks")
// );
// ReactDOM.render(ele, document.getElementById('root'));
