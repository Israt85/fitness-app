import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Outlet></Outlet>
        home
        </div>
    );
};

export default MainLayout;