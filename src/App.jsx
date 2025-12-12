import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'
import Projects from './components/Projects'
import TextEffectFlipper from './components/ui/text-effect-flipper'
import MyPage from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <CustomCursor />
          <Header />
        </>
      )
    },
    {
      path: '/Menu',
      element: <Menu />
    },
     {
      path: '/about',
      element: <About />
    }, {
      path: '/Contact',
      element: <MyPage/>
    },
    {
      path:'/Projects',
       element: (
        <>
          <CustomCursor />
          <Projects/>
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App

