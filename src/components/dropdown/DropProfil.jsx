import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import styles from "./dropdown.module.css"
import { BiUser } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

const profil = ({toggleVisible})=>{
    return(
        <div className={`${styles['icon-in-header']}`} onClick= {toggleVisible}>
            <img 
            src="https://th.bing.com/th/id/OIP.DWuM1QrYe4_4_ZpEVLkwyQHaHa?pid=ImgDet&rs=1"
            alt=""
            width="25"
            height="25"
            className="rounded-circle"
          />
        </div>
    );
}



const DropProfil = () => {
    return (
        <Dropdown El = {profil}>
            <nav className="mt-3">
              <ul className={`${styles["list-profile"]}`}>
                  <li >
                    <Link to="/profile">
                      <BiUser/>
                      <span>Profil</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <BiLogOutCircle/>
                      <span>Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <AiOutlineSetting />
                      <span>Déconnecter</span>
                    </Link>
                  </li>
              </ul>
            </nav>
        </Dropdown>
    );
}

export default DropProfil;
