import logo from './logo.svg';
import './App.css';
import Aberage from './Average';
import {useState} from 'react';



const App = ()=>{
  const [visible, setvisivle] = useState(false);

  return (
    <Aberage></Aberage>
  )
}


export default App;
