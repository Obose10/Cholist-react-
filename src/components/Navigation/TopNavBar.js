// import React, { Component } from 'react';
// import { MenuItems } from './MenuItems';
// import './TopNavBar.css';
// import { Button } from './Button';

// class TopNavBar extends Component {
//     state = {clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked})
//     }
//     render() {
//         return(
//             <nav className='NavbarItems'>
//                 <h1 className='navbar-logo'>React<i className="fa-brands fa-react"></i></h1>
//                 <div className='menu-icon' onClick={this.handleClick }>
//                     <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>

//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return(
//                             <li key={index}>
//                                 <a className={item.cName} href={item.url}>
//                                     {item.title}
//                                 </a>
//                           </li>
//                       )
//                     })}
                   
//                 </ul>
//                 <Button>Sign Up</Button>
//             </nav>
//         )
//     }
// }
  

// export default TopNavBar; 

import React from 'react';
import './TopNavBar.css';
import { Link } from "react-router-dom";


const TopNavBar = (props) => {
    return(
     <nav className="navbar">
        <Link to='/home' ><i className="fa fa-fw fa-home"></i></Link>
        <Link to="#Mail"><i className="fa-solid fa-envelope"></i></Link>
        <div className="searchContainer">
            <i className="fa fa-search searchIcon"></i>
            <input className="searchBox" type="search" name="search" placeholder="Search..." />
          </div>
          <div className="rear-icons">
             <Link to="#Alarm"><i className="fa-solid fa-bell"></i> </Link>
           <Link to="#Settings"><i className="fa-solid fa-gear"></i>  </Link >
         </div>  
        
     </nav>
    );
};

export default TopNavBar;