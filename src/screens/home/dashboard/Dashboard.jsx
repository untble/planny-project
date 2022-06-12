import React, { useState } from 'react';
import './Dashboard.css';
import { BsPlusCircle, IoIosRefreshCircle } from 'react-icons/all';
import UiModal from '../../../components/UI/UiModal/UiModal';

const Dashboard = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className='dashboard'>

      <div className='dashboard_buttons'>
        <IoIosRefreshCircle size={60} color='#FDC886' className='dashboard_button' />
        <BsPlusCircle size={50} color='#FDC886' className='dashboard_button'/>
      </div>
    </div>
  );
};

export default Dashboard;
