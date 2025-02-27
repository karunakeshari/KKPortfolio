import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import NoMatch from './components/NoMatch'
import Contact from './components/Contact'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "experience",
        element : <Experience/>
      },
      {
        path : "projects",
        element : <Projects/>
      },
      {
        path : "skills",
        element : <Skills/>
      },
      {
        path : "contact",
        element : <Contact/>
      }
    ]
  },
  {
    path : "*",
    element : <NoMatch/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
