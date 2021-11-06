import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';

/**
 * AppRoutes
 *
 * @description Component that contains all the App's Routes.
 * @returns {ReactElement} React Component
 */
function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
