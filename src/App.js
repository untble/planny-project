import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import AuthScreen from "./screens/authentication/AuthScreen";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase/firebase";

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            async authenticatedUser => {
                if(authenticatedUser) {
                    setUser(authenticatedUser)
                } else {
                    setUser(null)
                }
            })
        return () => unsubscribe()
    }, [])
    console.log('user', user)
  return (
    <>
      <Routes>
          <Route path='/' element={<AuthScreen />} />
          <Route path='/home' element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
