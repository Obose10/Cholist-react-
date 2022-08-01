import React from 'react';
import { Link } from "react-router-dom";

import './SideNavBar.css';


const SideNav = (props) => {
return (
<div>
   <nav className='sidenav'>
      <Link to="/about"><i className="fa-solid fa-calendar-days nav-icons"></i>About
      </Link>
      <Link to="/services"><i className="fa-solid fa-calendar-days nav-icons"></i>Services
      </Link>
      <Link to="/clients"><i className="fa-solid fa-calendar-days nav-icons"></i>Clients
      </Link>
      <Link to="/contact"><i className="fa-solid fa-calendar-days nav-icons"></i>Contact
      </Link>
   </nav>
</div>
 );
};
export default SideNav;