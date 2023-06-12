import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route,Routes, NavLink} from 'react-router-dom'


function Home(){
  return (
    <div>
      <h2>home</h2>
        home...
    </div>
  );


}

function Topices() {
  return (
    <div>
      <h2>Topics</h2>
        topics...
    </div>
  );
}


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
        contact...
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
