import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { BsPlusCircle, IoIosRefreshCircle } from 'react-icons/all';
import UiCard from '../../../components/UI/UiCard/UiCard';
import UiTitle from '../../../components/UI/UiTitle/UiTitle';
import DailyGoalsItem from '../../../components/DailyGoalsItem/DailyGoalsItem';
import AddDailyGoalItemModal from '../../../components/AddDailyGoalItemModal/AddDailyGoalItemModal';
import ResetDailyItemsModal from '../../../components/ResetDailyItemsModal/ResetDailyItemsModal';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import {db} from '../../../firebase/firebase';
import { getAuth } from 'firebase/auth';

const Dashboard = () => {
  const [isResetModalVisible, setIsResetModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [plans, setPlans] = useState([]);
  const isDailyGoalsListEmpty = plans?.length === 0;

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "plans", getAuth().currentUser.email);
      const docSnap = await getDoc(docRef);
      setPlans(docSnap?.data()?.plans);
    })()
  }, [getAuth().currentUser, plans, setPlans])

  const deleteItem = async (id) => {
    const filtered = plans.filter(item => item.id !== id);
    await updateDoc(doc(db, 'plans', getAuth().currentUser.email),{
      plans: filtered
    });
    setPlans(filtered);
  }

  const toggleItem = async (id) => {
    const filtered = plans.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    })
    await updateDoc(doc(db, 'plans', getAuth().currentUser.email), {
      plans: filtered
    })
    setPlans(filtered);
  }
  return (
    <div className='dashboard'>
      <div className='h-full flex flex-col items-center justify-center gap-12 mt-12'>
        <UiTitle title='Build your own daily plan!' className='font-medium text-5xl' />
        <UiCard className='w-4/5 h-sc overflow-auto space-y-4 scrollbar'>
          {!plans?.length ?
            (<div className='h-full w-full flex items-center justify-center'>
              <span className='text-3xl font-medium text-gray-300 text-center'>Click on plus sign button <br />to add some item</span>
            </div>)
            :
            (plans.map((item) => (
              <DailyGoalsItem
                id={item.id}
                key={item.time + item.description}
                name={item.title}
                description={item.description}
                done={item.done}
                deadline={item.time}
                deleteItem={deleteItem}
                toggleItem={toggleItem}
                plans={plans}
                setPlans={setPlans}
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
