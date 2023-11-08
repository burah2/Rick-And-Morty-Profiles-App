import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import CharacterList from './components/CharacterList.jsx'
import CharacterDetail from './components/CharacterDetail.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/character/:id',
    element: <CharacterDetail />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
