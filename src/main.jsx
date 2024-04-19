import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

import Root from './routes/Root'
import NotFound from './NotFound'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement:<NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
