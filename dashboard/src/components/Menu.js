import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(0)
    const handleMenu = (idx) => {
        setSelectedMenu(idx)
    }
    return (
        <div className="menu-container  d-flex border align-items-center">
            <img src="logo.png" style={{ width: "50px", margin: "20px 20px", height: "30px" }} />
            <div className="menu gap-4" style={{ marginLeft: "320px" }}>
                <Link to="/" onClick={()=>{handleMenu(0)}}>
                    <p className={selectedMenu===0 ? "selected" :"notselected"}>Dashboard</p>
                </Link>
                <Link to="/orders" onClick={()=>{handleMenu(1)}}>
                    <p className={selectedMenu===1 ? "selected" :"notselected"}>Orders</p>
                </Link>
                <Link to="/holdings" onClick={()=>{handleMenu(2)}}>
                    <p className={selectedMenu===2 ? "selected" :"notselected"}>Holdings</p>
                </Link>
                <Link to="/positions" onClick={()=>{handleMenu(3)}}>
                    <p className={selectedMenu===3 ? "selected" :"notselected"}>Positions</p>
                </Link>
                <Link to="/funds" onClick={()=>{handleMenu(4)}}>
                    <p className={selectedMenu===4 ? "selected" :"notselected"}>Funds</p>
                </Link>
                <Link to="/apps" onClick={()=>{handleMenu(5)}}>
                    <p className={selectedMenu===5 ? "selected" :"notselected"}>Apps</p>
                </Link>
                <Link to="/userid" onClick={()=>{handleMenu(6)}}>
                    <p className={selectedMenu===6 ? "selected" :"notselected"}>UserID</p>
                </Link>&nbsp;
            </div>
        </div>
    );
}

export default Menu;