import React from 'react';
import './SideNavBar.css';


const SideNav = (props) => {
return (
<div className='sidenav'>
   <a href='#section'><i className="fa-solid fa-calendar-days nav-icons"></i>About</a>
   <a href='#section'><i className="fa-solid fa-calendar-day nav-icons"></i>Services</a>
   <a href='#section'><i className="fa fa-fw fa-user nav-icons"></i>Clients</a>
   <a href='#section'><i className="fa fa-fw fa-user nav-icons"></i>Contact</a>
   <a href='#section'><i className="fa fa-fw fa-user nav-icons"></i>Contact</a>
</div>
 );
};
export default SideNav;