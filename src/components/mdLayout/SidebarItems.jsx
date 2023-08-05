import React from 'react';
import { NavLink } from "react-router-dom";
import { TbLayoutDashboard } from 'react-icons/';



const SidebarItems = () => {
    return (
        <div className="mt-2 sidebar-items">
        <nav>
          <ul className='liste-sidebar'>
            <li className='sidebar-item'>
              <NavLink to="/" >
                <TbLayoutDashboard/>
                Dashboard
              </NavLink>
            </li>

            <li className='sidebar-item'>
              <NavLink to="/profile" >
                <TbLayoutDashboard/>
                Profil
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    );
}

export default SidebarItems;
