import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className='w-full max-w-5xl min-h-[80vh] mx-auto flex flex-col rounded-xl sm:w-11/12 sm:bg-white sm:shadow-lg sm:flex-row sm:p-2'>
      <Sidebar />
      <main className='sm:flex-[0.7]'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout