import React, { useContext } from 'react';
import "./styles.css"

import { Link } from "react-router-dom"

import { CartContext } from "../cart/context"

function TopBar() {
    const cartCtx = useContext(CartContext);
    const numItems = cartCtx.itemsCount;

    return <div className="layout top-bar">
        <div className="wrapper ">
            <div className="section" id='top-bar-ch'>Soul Chicken </div>
            <div className="section ">
            <Link to="/">Home</Link> | <Link to="/products">Menu</Link> | <Link to="/view-cart">View cart ({numItems})</Link>
            </div>
        </div>
    </div>
}

export default TopBar