import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css'
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  };

  return (
    <>
      <div className="react">{name}</div>
      <input type="text" />
    </>
  );
}

export default App;
