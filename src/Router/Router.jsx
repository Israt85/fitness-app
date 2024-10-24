
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login/Login';
import Verification from '../Pages/Verification/Verification';
import DashBoardLayout from '../Layout/DashBoardLayout';

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
      element:<DashBoardLayout></DashBoardLayout>
    }
  ]);

export default Router;