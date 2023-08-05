import React, {useState, useEffect} from 'react';
import { NavLink, Link } from "react-router-dom";
import { TbLayoutDashboard } from 'react-icons/tb';
import Logo from './Logo';
// TbLayoutDashboard




const Sidebar = ({withSidebar, isFeign, toggleFeignClass}) => {

  return (
    <aside className={`sidebar ${withSidebar ? 'with-sidebar' : ''}  ${isFeign ? 'feign' : ''}`}>
      <div className="d-flex justify-content-end mt-2 mx-3 closer" onClick={toggleFeignClass}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>

      <div className='text-center maison '>
        <Logo/>
      </div>
      
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
      
    </aside>
  );
};

export default Sidebar;

