import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'; // Import your CSS file for styling
import LoginForm from './component/login';
import SignUpForm from './component/SignUp';




function App() {
  return (

    <div>
      <h1 id='title'>SPARDHA'23</h1>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/Signup' element={<SignUpForm/>}/>

   

      </Routes>
      </Router>

    </div>
  );
}

export default App;
