import { useState } from 'react';
import './App.css';

function App() {

  const[count,setCount] = useState(0)
  const change = () => {
    setCount(count+1)
  }

  return (
    <>
      <p>{ count }</p>
      <button onClick={change}>Click Here</button>
    </>
  );
}

export default App;
