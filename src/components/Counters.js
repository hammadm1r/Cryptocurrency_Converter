import React, {useState} from 'react';
function Counters() {
   /* let [count, setCount]=useState(0);
    function updateCount(){
        setCount(count+1);
        console.log(count);
    }
    function resetCount(){
        setCount(0);
        console.log(count);
    }
    function decrementCount(){
        if(count>0){
            setCount(count-1);
        console.log(count);}
    }
  return (
    <>
        <h1>The Value of Count is:{count}</h1>
        <button onClick={updateCount}> Increment</button>
        <button onClick={resetCount}> Reset</button>
        <button onClick={decrementCount}> Decrement</button>
    </>
  )*/
  let [yourName,updateName]=useState('');
  function updateInput(event){
    const newName=event.target.value;
    updateName(newName)
  }
  return(
    <>
    <h1>My Name is {yourName}</h1>
    <input type="text" onChange={updateInput}/>
    </>
  )
}

export default Counters