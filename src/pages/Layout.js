import { Outlet } from 'react-router-dom';
import './../styles/Layout.css';

function Layout() {
    return(
        <div>
            <div id='layout-background' />
            <p>This is the Header.</p>
            <Outlet/>
            <p>This is the Footer.</p>
        </div>
    );
}

export default Layout;