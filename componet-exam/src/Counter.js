import { Component } from 'react';
import Say from './Say';

class Counter extends Component {
  state ={
    number : 0,
    fixednum :0
  };

  render() {
    const {number,fixednum} = this.state;
    return (
      <>
      <div>
        <h1>{number}</h1>
        <h2>바꾸지 않은값{fixednum}</h2>
        <button onClick={()=>{
          this.setState( 
          {
            number : number+1
          },
          () =>{
              console.log('status 가 변경됨');
              console.log(this.state);
          }
          );
        }}
        >
          +1
        </button>
      </div>
      <Say></Say>
      </>
    );
  }
}



export default Counter;