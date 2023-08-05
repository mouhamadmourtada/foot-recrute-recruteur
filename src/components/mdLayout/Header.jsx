import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import Dropdown from '../dropdown/Dropdown';
import DropProfil from '../dropdown/DropProfil';
import DropChat from '../dropdown/DropChat';
import DropEmail from '../dropdown/DropEmail';
import DropNotif from '../dropdown/DropNotif';
// import DropdownMenu from 'react-bootstrap/Dropdown';





const Header = ({toggleFeignClass, isNeubBuntu}) => {

  const monOnclick = ()=>{
    console.log("mon click enregistré")
  }

  return (
    <header className="app-header">
      <div className="d-flex justify-content-between">
        <div className={`buntu ${isNeubBuntu ? 'neubBuntu' : ''}`} onClick={toggleFeignClass}>
          <UnorderedListOutlined />
        </div>
        <nav>
          <ul className="d-flex list-unstyled px-3">
            <li className="mx-2">
                <DropNotif/>
            </li>
            <li className="mx-2">
                <DropChat/>
            </li>

            <li className="mx-2">
                <DropEmail/>
            </li>
            <li className="mx-2">
                <DropProfil/>
            </li>
            


           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

