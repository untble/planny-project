import React from 'react';
import Logo from '../../../assets/logo.png';
import './Header.css';
import { getAuth } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <header className='header'>
      <div className='header-container'>
        <img src={Logo} alt='Planny' className='header-logo' />
        {/*<input type='text'*/}
        {/*       placeholder='Search by title...'*/}
        {/*       className='header-input'*/}
        {/*/>*/}
        <div className="dropdown">
          <div className='header-username'>{getAuth()?.currentUser?.email}</div>
          <div className='dropdown-content' onClick={async () => {
            await getAuth().signOut();
            history.push('/');
          }}
          >Logout</div>
        </div>

      </div>

    </header>
  );
};

export default Header;
