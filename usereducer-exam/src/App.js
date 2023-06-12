import logo from './logo.svg';
import {useReducer,useState} from 'react'


function App() {

  const [number,setNumber] = useState(1);

  function countReducer(oldCount,action){
    if(action.type === 'UP')
      return oldCount + action.number;
    else if(action.type === 'DOWN')
      return oldCount - action.number;
    else if(action.type === 'RESET')
      return 0;

  }

  function changeNumber(event){
    setNumber(Number(event.target.value));
    
  }

  const [count,countDipatch] = useReducer(countReducer,0);
  function down(){
    countDipatch({ type: 'DOWN', number:number});
  }
  function up(){
    countDipatch({ type: 'UP', number:number});
  }
  function reset(){
    countDipatch({ type: 'RESET', number:number});
  }


  return (
    <div className="App">
      <input type="button" value="-" onClick={down}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="+" onClick={up}></input>
      <input type="text" value={number} onChange={changeNumber}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
