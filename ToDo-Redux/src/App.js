import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from './Components/NavBar';


function App() {
  const [login, setLogin] = useState("")
  return (
    <div className="App m-5 container bg-dark">
      <NavBar setLogin={setLogin} login={login} />
      {!login ? <h1 style={{ height: 500, color: 'white' }}>Please Login to see your tasks</h1> :
        <div className="row">
          <div className="col-2"></div>
          <div className="col bg-dark text-white">
            <AddTask login={login} />
            <ListTask login={login} />
          </div>
          <div className="col-2"></div>
        </div>
      }
    </div >
  );
}

export default App;
