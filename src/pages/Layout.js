import { useLocation, Link, Outlet } from 'react-router-dom';
import './../styles/Layout.css';

function Layout() {

    const current = useLocation().pathname.replace(/[^A-Za-z]/g, '');
    const selectorMargin = ['', 'solar', 'bio', 'geothermal', 'map', 'citations'].indexOf(current) * 125 + 5;

    return(
        <div>
            <div id='layout-background' />
            <div id='layout-navbar'>
                <div id='layout-navbar-selector' style={ selectorMargin > 0 ? { marginLeft: selectorMargin } : { opacity: 0 } } />
                <Link to='/' class={ 
                    current === '' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>HOME</Link>
                <Link to='/solar' class={ 
                    current === 'solar' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>SOLAR</Link>
                <Link to='/bio' class={ 
                    current === 'bio' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>BIO</Link>
                <Link to='/geothermal' class={ 
                    current === 'geothermal' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>GEOTHERMAL</Link>
                <Link to='/map' class={ 
                    current === 'map' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>MAP</Link>
                <Link to='/citations' class={ 
                    current === 'citations' ? 'layout-navbar-link layout-navbar-selected' : 'layout-navbar-link layout-navbar-selectable' 
                }>CITATIONS</Link>
            </div>
            <Outlet/>
            <p>This is the Footer.</p>
        </div>
    );
}

export default Layout;