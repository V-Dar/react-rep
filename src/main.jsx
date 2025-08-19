import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import HomePage from './Layout/HomePage.jsx'
import MyComponents from './Layout/Hooks/MyComponents.jsx'

createRoot(document.getElementById('root')).render(
  // <HomePage></HomePage>
  <MyComponents></MyComponents>
)
