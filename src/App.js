import React from 'react';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

