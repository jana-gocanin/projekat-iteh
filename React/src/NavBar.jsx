import React from "react";
import { FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar({cartNum}) {
    return (
        <div className="navBar">
            <Link to="/">Doniraj</Link>
            <Link to = "/cart" className="cart-items">
                <FaDog style={{ marginLeft: 10 }} />
                <div className="cart-num">{cartNum}</div>
            </Link>
            <Link to="/contact" style={{ marginLeft: 20 }}>Kontakt</Link>
        </div>
    )
}

export default NavBar