import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
     <header className='w-11/12 px-4 mx-auto'>
      <Navbar></Navbar>
     </header>
     <main className='w-11/12 mx-auto py-5 '>
     <Outlet></Outlet>

     </main>
    </div>
  );
};

export default AuthLayout;