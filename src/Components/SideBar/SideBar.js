import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  //import icons from react icons
  import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
  } from "react-icons/fi";
  import { FaUserCircle} from 'react-icons/fa'
  import 'react-pro-sidebar/dist/css/styles.css';
  
  import './SideBar.css'
const SideBar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        };
  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <FaUserCircle /> : "Admin Panel"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
               <Link to='/'>Dashborad</Link> 
              </MenuItem>
              <MenuItem icon={<img src='/images/4904catiocn_8.png' alt="hairs" />}>
               <Link to='/Hairs'>HAIRS</Link> 
              </MenuItem>
              <MenuItem  icon={<img src='/images/3486catiocn_7.png' alt='facial' />}>
               <Link to='/FacialAndCleanUp'>FACIAL & CLEAN UP</Link> 
              </MenuItem>
              <MenuItem  icon={<img src='/images/1018catiocn_6.png' alt='wax' />}>
               <Link to='/Waxing'>WAXING</Link> 
              </MenuItem>
              <MenuItem icon={<img src='/images/package.png' alt='package' />}>
               <Link to='/Package'>PACKAGE</Link> 
              </MenuItem>
              <MenuItem  icon={<img src='/images/clipart3606269.png' alt='manicure' />}>
               <Link to='/Manicure'>MANICURE & PEDICURE</Link> 
              </MenuItem>
              <MenuItem  icon={<img src='/images/bridal.png' alt='bridal' />}>
               <Link to='/Bridal'>BRIDAL</Link> 
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
             <MenuItem icon={<FiLogOut />}><Link  to='/logout'>Logout</Link></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}

export default SideBar