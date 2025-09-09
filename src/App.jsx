import React, { useState } from 'react';

import './App.css';
import ZustandCounter from './zustand-practice/components/ZustandCounter.jsx';
import {useCounterStore} from './zustand-practice/Store/counterStore.js';
import Header from './zustand-practice/components/Header.jsx';
import Auth from './zustand-practice/components/Auth.jsx';
import {useAuthStore} from './zustand-practice/Store/authStore.js';
import UserProfile from './zustand-practice/components/UserProfile.jsx';

const App = () => {

    const {count} = useCounterStore();

    const {isLoggedIn} = useAuthStore();

    return (
        <>
            <Header/>
            {isLoggedIn ? <UserProfile/> : <Auth/>}
            <ZustandCounter />
        </>
    );
};

export default App;