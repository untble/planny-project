import React, { useState } from 'react';
import './Dashboard.css';
import { BsPlusCircle, IoIosRefreshCircle } from 'react-icons/all';
import UiCard from '../../../components/UI/UiCard/UiCard';
import UiTitle from '../../../components/UI/UiTitle/UiTitle';
import { dailyGoalsItemsMock } from '../../../mocks/mocks-data';
import DailyGoalsItem from '../../../components/DailyGoalsItem/DailyGoalsItem';

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='dashboard'>
      <div className="flex flex-col items-center justify-center gap-12 mt-12">
        <UiTitle title='Build your own daily plan!' className='font-medium text-5xl' />
        <UiCard className='w-4/5 h-112 overflow-auto space-y-4 scrollbar'>
          {dailyGoalsItemsMock.map((item) => (
            <DailyGoalsItem
              key={item.itemId}
              id={item.itemId}
              name={item.itemName}
              description={item.itemDescription}
              deadline={item.itemDeadline}
            />
          ))}
        </UiCard>
      </div>

      <div className='dashboard_buttons'>
        <IoIosRefreshCircle size={60} color='#FDC886' className='dashboard_button' />
        <BsPlusCircle size={50} color='#FDC886' className='dashboard_button' />
      </div>
    </div>
  );
};

export default Dashboard;
