import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';

function App() {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!signIn) {
  //     navigate('/signin');
  //   }
  // }, [signIn,navigate]);


  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/signin" element={<SignIn onLogin={()=>setSignIn(true)}/>} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
