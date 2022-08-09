import React from 'react';
import { Link } from "react-router-dom";

import './SideNavBar.css';


const SideNav = (props) => {
return (
<div>
   <nav className='sidenav'>
      <Link to="/about"><i className="fa-solid fa-calendar-days nav-icons"></i>Overview
      </Link>
      <Link to="/services"><i className="fa-solid fa-calendar-days nav-icons"></i>Today
      </Link>
      <Link to="/clients"><i className="fa fa-fw fa-user nav-icons"></i>Personal
      </Link>
      <Link to="/contact"><i className="fa-solid fa-briefcase nav-icons"></i>Work
      </Link>
        <Link to="/contact"><i className="fa-solid fa-receipt nav-icons"></i>Others
      </Link>
      <Link to="/contact"><i className="fa-solid fa-calendar-check nav-icons"></i>Completed
      </Link>
   </nav>
</div>
 );
};
export default SideNav;