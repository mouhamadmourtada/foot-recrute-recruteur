import React from 'react';
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {LogoutOutlined } from '@ant-design/icons';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import styles from "./dropdown.module.css"


const notifIcon = ({toggleVisible}) => {
    return (
        <div className={`${styles['icon-in-header']}`} onClick={toggleVisible}>
            <div>
              <span>+9</span>
              <MdOutlineNotificationsActive  />
            </div>
        </div>
    );
}

const DropNotif = () => {
    return (
        <Dropdown El = {notifIcon}>
            <nav className="mt-3">
              <ul>
                  <li>
                    <Link to="/profile">
                      <UserOutlined/>
                      <span>Profil</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <UserOutlined/>
                      <span>Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <LogoutOutlined />
                      <span>Déconnecter</span>
                    </Link>
                  </li>
              </ul>
          </nav>
        </Dropdown>
    );
}

export default DropNotif;