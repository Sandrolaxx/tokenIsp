import React from 'react';
import './global.css';

import Routes from './routes';
import Header from './pages/Header';

function App() {
    return (
        <div>
        <Header title='ISP SAÚDE'/>
        <Routes />
        </div>
    );
}

export default App;