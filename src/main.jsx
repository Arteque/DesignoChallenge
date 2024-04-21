import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import "./App.scss"
import Root from './Layouts/Root'

import Home from './routes/Home'
import About from './routes/About'
import Contact from "./routes/Contact"
import Locations from "./routes/Locations"
import WebDesign from "./routes/WebDesign"
import AppDesign from "./routes/AppDesign"
import GraphicDesign from "./routes/GraphicDesign"

//* Error Page
import NotFound from './NotFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/locations' element={<Locations />} />
      <Route errorElement={<NotFound />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
