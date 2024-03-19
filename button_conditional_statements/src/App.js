import { useState , useEffect } from 'react';
import './App.css';

function App() {

  const[count,setCount] = useState(0)
  const useEffect(() => {
    if(count>0) {
      document.title = `chats ${count}`
    } else {
      doucment.title = 'chats'
    }
  })
 
  return (
    <>
      <p>{ count }</p>
      <button onClick={() => { setCount(count+1) }>Click Here</button>
    </>
  );
}

export default App;
