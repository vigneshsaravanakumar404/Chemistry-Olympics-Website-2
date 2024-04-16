import { useLocation, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './../styles/Layout.css';

function Navbar() {
    const current = useLocation().pathname.replace(/[^A-Za-z]/g, '');
    const selectorMargin = ['', 'solar', 'bio', 'geothermal', 'map', 'citations'].indexOf(current) * 125 + 5;

    return(
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
    );
}

function Dropdown() {
    const current = useLocation().pathname.replace(/[^A-Za-z]/g, '');
    const selectorMargin = ['', 'solar', 'bio', 'geothermal', 'map', 'citations'].indexOf(current) * 55 + 5;
    const [open, setOpen] = useState(false);

    return(
        <div id='layout-dropdown' style={
            open ? (selectorMargin > 0 ? { height: 330 } : { height: 385 }) : { height: 55 }
        }>
            <div id='layout-dropdown-selector' style={
                selectorMargin > 0 ? (open ? { marginTop: selectorMargin } : {}) : { zIndex: 2 }
            } onClick={() => {
                setOpen(!open);
            }}/>
            <Link to='/' class={
                current === '' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            } style = {
                open ? (selectorMargin > 0 ? { marginTop: 5 } : { marginTop: 60 }) : {}
            }
            onClick={() => {
                setOpen(!open);
            }}>HOME</Link>
            <Link to='/solar' class={ 
                current === 'solar' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            }  style = {
                open ? (selectorMargin > 0 ? { marginTop: 60 } : { marginTop: 115 }) : {}
            } onClick={() => {
                setOpen(!open);
            }}>SOLAR</Link>
            <Link to='/bio' class={ 
                current === 'bio' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            }  style = {
                open ? (selectorMargin > 0 ? { marginTop: 115 } : { marginTop: 170 }) : {}
            } onClick={() => {
                setOpen(!open);
            }}>BIO</Link>
            <Link to='/geothermal' class={ 
                current === 'geothermal' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            }  style = {
                open ? (selectorMargin > 0 ? { marginTop: 170 } : { marginTop: 225 }) : {}
            } onClick={() => {
                setOpen(!open);
            }}>GEOTHERMAL</Link>
            <Link to='/map' class={ 
                current === 'map' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            }  style = {
                open ? (selectorMargin > 0 ? { marginTop: 225 } : { marginTop: 280 }) : {}
            } onClick={() => {
                setOpen(!open);
            }}>MAP</Link>
            <Link to='/citations' class={ 
                current === 'citations' ? 'layout-dropdown-link layout-navbar-selected' : 'layout-dropdown-link layout-navbar-selectable' 
            }  style = {
                open ? (selectorMargin > 0 ? { marginTop: 280 } : { marginTop: 335 }) : {}
            } onClick={() => {
                setOpen(!open);
            }}>CITATIONS</Link>
        </div>
    );
}

function Layout() {
    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    window.addEventListener('resize', () => {
        if(window.innerWidth <= 768 && !mobile)
        {
            setMobile(true);
        }
        else if(window.innerWidth > 768 && mobile)
        {
            setMobile(false);
        }
    })

    return(
        <div>
            <div id='layout-background' />
            { mobile ? <Dropdown/> : <Navbar/> }
            <Outlet/>
            <div id='layout-footer-divider'/>
            <p class='layout-footer'>Designed and Developed by Ishaan Sinha, Tejas Raghuram, and Vignesh Saravanakumar</p>
            <p class='layout-footer'>South Brunswick High School Team A, 2024</p>
        </div>
    );
}

export default Layout;
