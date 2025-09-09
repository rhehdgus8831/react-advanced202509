import React, { useState } from 'react';

import './App.css';
import ZustandCounter from './zustand-practice/components/ZustandCounter.jsx';
import {useCounterStore} from './zustand-practice/Store/counterStore.js';
import Header from './zustand-practice/components/Header.jsx';
import Auth from './zustand-practice/components/Auth.jsx';

const App = () => {

    const {count} = useCounterStore();
    
    return (
        <>
            <Header/>
            <Auth/>
            <ZustandCounter />
        </>
    );
};

export default App;