import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName] = useState("Parimal")

  const changeValue = () => {

    let val = name
    if(name === "Parimal" ) {
      setName("Kholla")
    } else {
      setName("Parimal")
    }
  }

  return (
    <>
      <div>
        <h1>{ name }</h1>
        <button onClick= { changeValue } >Click Here</button>
      </div>
    </>
  );
}

export default App;
