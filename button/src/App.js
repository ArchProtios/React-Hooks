import { useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = `chats ${count}`
  })
  
  const[count,setCount] = useState(0)

  return (
    <>
      <p>{ count }</p>
      <button onClick={() => {setCount(count+1)}>Click Here</button>
    </>
  );
}

export default App;
