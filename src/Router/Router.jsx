
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import Verification from '../Pages/Verification/Verification';
import DashBoardLayout from '../Layout/DashBoardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Profile/Profile';
import Users from '../Pages/Users/Users';
import Worksout from '../Pages/Worksout/Worksout';
import Subscription from '../Pages/Subscription/Subscription';
import AddWorkouts from '../Pages/AddWorkouts/AddWorkouts';
import BasicInfo from '../Pages/BasicInfo/BasicInfo';
import Password from '../Pages/Password/Password';

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
          element:<Profile></Profile> ,
          children:[
            { path: 'basicinfo',
              element:<BasicInfo></BasicInfo>
           },
           {
            path:'password',
            element: <Password></Password>
           }
          ]
        },
        {
          path:'users',
          element:<Users></Users> 
        },
        {
          path:'videos',
          element: <Worksout></Worksout>
        },
        {
          path: 'workouts',
          element: <AddWorkouts></AddWorkouts>
        },
        {
          path:'subscription',
          element: <Subscription></Subscription>
        }
      ]
    },
    
  ]);

export default Router;