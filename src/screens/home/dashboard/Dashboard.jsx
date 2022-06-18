import React, { useState } from 'react';
import './Dashboard.css';
import { BsPlusCircle, IoIosRefreshCircle } from 'react-icons/all';
import UiCard from '../../../components/UI/UiCard/UiCard';
import UiTitle from '../../../components/UI/UiTitle/UiTitle';
import { dailyGoalsItemsMock } from '../../../mocks/mocks-data';
import DailyGoalsItem from '../../../components/DailyGoalsItem/DailyGoalsItem';
import AddDailyGoalItemModal from '../../../components/AddDailyGoalItemModal/AddDailyGoalItemModal';
import ResetDailyItemsModal from '../../../components/ResetDailyItemsModal/ResetDailyItemsModal';

const Dashboard = () => {
  const [isResetModalVisible, setIsResetModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const isDailyGoalsListEmpty = dailyGoalsItemsMock.length === 0;
  return (
    <div className='dashboard'>
      <div className='h-full flex flex-col items-center justify-center gap-12 mt-12'>
        <UiTitle title='Build your own daily plan!' className='font-medium text-5xl' />
        <UiCard className='w-4/5 h-sc overflow-auto space-y-4 scrollbar'>
          {isDailyGoalsListEmpty ?
            (<div className='h-full w-full flex items-center justify-center'>
              <span className='text-3xl font-medium text-gray-300 text-center'>Click on plus sign button <br />to add some item</span>
            </div>)
            :
            (dailyGoalsItemsMock.map((item) => (
              <DailyGoalsItem
                key={item.itemId}
                id={item.itemId}
                name={item.itemName}
                description={item.itemDescription}
                deadline={item.itemDeadline}
              />
            )))}
        </UiCard>
      </div>

      <div className='dashboard_buttons'>
        {!isDailyGoalsListEmpty && <IoIosRefreshCircle size={60} color='#FDC886' className='dashboard_button' onClick={() => setIsResetModalVisible(true)} />}
        <BsPlusCircle size={50} color='#FDC886' className='dashboard_button' onClick={() => setIsAddModalVisible(true)} />
        <ResetDailyItemsModal visible={isResetModalVisible} setVisible={setIsResetModalVisible} />
        <AddDailyGoalItemModal visible={isAddModalVisible} setVisible={setIsAddModalVisible} />
      </div>
    </div>);
};

export default Dashboard;
