import { FC } from 'react';
import {useState} from 'react';

export default function ShowMessageButton({CurrentDate}) {

 const[iCounter,setCounter]=useState(0);

  function HandleClick() {
    alert('click me on '+CurrentDate);
    setCounter(iCounter+1);
  }

  return (<button onClick={HandleClick}>Click Me Click Count {iCounter} </button>);
}
