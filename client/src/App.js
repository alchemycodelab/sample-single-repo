import { useState, useEffect } from 'react';
import aclLogo from './aclLogo.png';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('')
  const fetchData = async() => {
    const resp = await fetch('/api/message');
    const data = await resp.json();
    console.log(data);
    setBackendMessage(data.message);
  }

  useEffect(()=>{
      fetchData();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={aclLogo} className="App-logo" alt="logo" />
        <p>
          { backendMessage }
        </p>
      </header>
    </div>
  );
}

export default App;
