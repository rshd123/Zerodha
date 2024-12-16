import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Menu = () => {

  const [selectedMenu,setSelectedMenu] = useState(-1);
  const [isProfileDropDown,setProfileDropDown] = useState(false);
  
  const handleMenuClick = (idx)=>{
    setSelectedMenu(idx);
  };

  const handleProfileClick = (idx)=>{
    setProfileDropDown(!isProfileDropDown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="./logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link 
              to='/' 
              style={{textDecoration:'none'}} 
              onClick={()=>handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{textDecoration:'none'}}
              to='/orders'
              onClick={()=>handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
              </Link>
          </li>
          <li>
            <Link
              style={{textDecoration:'none'}}
              to="/holdings"
              onClick={()=>handleMenuClick(2)}
            >
              <p className= {selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
              </Link>
          </li>
          <li>
            <Link
              style={{textDecoration:'none'}}
              to='/positions'
              onClick={()=>handleMenuClick(3)}
            >
              <p className={handleMenuClick===3 ? activeMenuClass : menuClass}>
                Positions
              </p>
              </Link>
          </li>
          <li>
            <Link
              style={{textDecoration:'none'}}
              to='/funds'
              onClick={()=>setSelectedMenu(4)}
            >
              <p className={selectedMenu===4 ? activeMenuClass:menuClass}>
                Funds
              </p>
              </Link>
          </li>
          <li>
            <Link
              style={{textDecoration:'none'}}
              to='/apps'
              onClick={()=>setSelectedMenu(5)}
            >
              <p className={selectedMenu===5 ? activeMenuClass:menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          
          <div className="avatar">
            <AccountCircleIcon/>
          </div>
          <p className="username">
            <Link
              style={{textDecoration:'none'}}
              to='/signin'
              onClick={()=>setSelectedMenu(5)}
            >SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
