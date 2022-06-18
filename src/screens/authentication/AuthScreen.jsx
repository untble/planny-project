import React, { useEffect } from 'react';
import './AuthScreen.css';
import { toggleAuth } from '../../helpers/toggleAuth';
import SignInForm from './signinForm/SignInForm';
import { useHistory } from 'react-router-dom';
import { handleAuth } from '../../helpers/firebaseSignin';


const AuthScreen = () => {
  const history = useHistory();

  useEffect(() => {
    toggleAuth();
  }, []);


  const onSubmit = (email, password, name, mode) => {
    handleAuth(email, password, name, mode).then(user => {
      history.push('/home');
      console.log(user);
    }).catch(error => {
      alert(error.message);
    });
  };

  return (
    <div className='global_wrapper'>
      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <SignInForm
            title='Create Account'
            subtitle='or use email for registration'
            buttonName='Sign Up'
            mode='signup'
            onSubmit={onSubmit}
          />
        </div>
        {/*--------------------------------------------*/}
        <div className='form-container sign-in-container'>
          <SignInForm
            title='Sign in'
            subtitle='or use email to sign in'
            buttonName='Sign In'
            onSubmit={onSubmit}
          />
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1 className="header-1">Welcome Back</h1>
              <p className="paragraph">To keep connected with us please login</p>
              <button className='auth-button ghost' id='SignIn'>Sign In</button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1 className="header-1">Hello Friend</h1>
              <p className="paragraph">Enter your personal details and start with us</p>
              <button className='auth-button ghost' id='SignUp'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AuthScreen;
