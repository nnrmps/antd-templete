import React, { useState } from 'react';

import { HashRouter } from 'react-router-dom'
// import LoginPage from './pages/Login'
import PageLayout from './layouts/Layout'
import LoginPage from './pages/Login'

import './css/App.css'


import { useSelector } from 'react-redux';

const App = () => {
  const { auth } = useSelector((state) => state.user)

  if (!auth) return <LoginPage></LoginPage>
  return (
    <HashRouter>
      <PageLayout />
    </HashRouter>
  );
}

export default App;
