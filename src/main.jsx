import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import DonationDetails from './components/DonationDetails/DonationDetails';
import DonationLists from './components/DonationLists/DonationLists';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/:id",
        element: <DonationDetails></DonationDetails>,
        loader:()=> fetch(`donation.json`)
      },
      {
        path:"/donationList",
        element:<DonationLists></DonationLists>,
        loader:()=>fetch('donation.json')
      },
      {
        path:"/stat",
        element:<Statistics></Statistics>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
