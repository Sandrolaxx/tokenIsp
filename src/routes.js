import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Purchase from './pages/Purchase';
import Payment from './pages/Payment';
import PaymentSummary from './pages/PaymentSummary';
import Thank from './pages/Thank';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/purchase' component={Purchase} />
                <Route path='/payment' component={Payment} />
                <Route path='/paymentSummary' component={PaymentSummary} />
                <Route path='/thank' component={Thank} />
            </Switch>
        </BrowserRouter>
    );
}