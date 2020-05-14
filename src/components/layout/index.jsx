import React from 'react';
import Topbar from "../top-bar"
import './styles.css';

function Layout({ children, title }){
    document.getElementsByTagName("title")[0].innerText = title
    return (
    <>
        <Topbar/>
        <div className="wrapper">
            <h1>{title}</h1>
            {children}
        </div>
    </>
    );
}

export default Layout

