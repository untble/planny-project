import React from 'react';
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';

const styles = {
  width: '92%',
};

const HomeScreen = () => {
  return (
    <div style={styles} className="mx-auto">
      <Header />
      <Dashboard />
    </div>
  );
};

export default HomeScreen;
