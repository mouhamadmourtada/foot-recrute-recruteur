import React from 'react';
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {LogoutOutlined } from '@ant-design/icons';
// import {MailOutlined } from '@ant-design/icons';
import { AiOutlineMail } from 'react-icons/ai';
import styles from "./dropdown.module.css"


const emailIcon = ({toggleVisible}) => {
    return (
        <div className={`${styles['icon-in-header']}`} onClick={toggleVisible}>
            <div>
              <span>+9</span>
              <AiOutlineMail  />
            </div>
        </div>
    );
}

const DropEmail = () => {
    return (
        <Dropdown El = {emailIcon}>
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

export default DropEmail;