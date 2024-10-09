import React from 'react'
import Layout from './components/layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routing } from './variables/Routing';

export default function App() {
  
  return <RouterProvider router={Routing} />;
}
