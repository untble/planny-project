import React from 'react';
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";

const styles = {
    width: "92%",
    margin: "0 auto"
}

const HomeScreen = () => {
    return (
        <div style={styles}>
            <Header />
            <Dashboard />
        </div>
    );
};

export default HomeScreen;