// router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '@/components/forms/LoginForm';
import RegisterForm from '@/components/forms/RegisterForm';

export default function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={RegisterForm} />
        <Route path="login" component={LoginForm} />
        
        {/* alte rute si componente */}
      </Switch>
    </Router>
  );
};

