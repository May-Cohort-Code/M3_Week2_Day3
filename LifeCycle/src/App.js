import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import IronbnbList from './components/IronbnbList';
import Countries from './components/Countries';

function App() {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
      {/* <button onClick={()=>{setShow(!show)}}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <Counter></Counter>} */}

      <Countries></Countries>
    </div>
  );
}

export default App;
