
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import Verification from '../Pages/Verification/Verification';
import DashBoardLayout from '../Layout/DashBoardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Profile/Profile';
import Users from '../Pages/Users/Users';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
        path:'/login',
        element: <Login></Login>

    },
    {
      path:'/verification',
      element: <Verification></Verification>
    },
    {
      path:'dashboard',
      element:<DashBoardLayout></DashBoardLayout>,
      children:[
        {
          path:'menu',
          element: <Dashboard></Dashboard>
        },
        {
          path:'profile',
          element:<Profile></Profile> 
        },
        {
          path:'users',
          element:<Users></Users> 
        }
      ]
    }
  ]);

export default Router;