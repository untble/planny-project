import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeScreen from './screens/home/HomeScreen';
import AuthScreen from './screens/authentication/AuthScreen';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser);
          const docRef = doc(db, 'plans', getAuth()?.currentUser.email);
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            await setDoc(doc(db, 'plans', getAuth()?.currentUser.email), {
              plans: []
            });
          }
        } else {
          setUser(null);
        }
      });
    return () => unsubscribe();
  }, [getAuth()?.currentUser]);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          {user ? <Redirect to='/home' />: <AuthScreen />}
        </Route>
        {user && <Route exact path='/home'><HomeScreen /></Route>}
        {/*<Route path='/home' element={<HomeScreen />} />*/}
      </Switch>
    </>
  );
};

export default App;
