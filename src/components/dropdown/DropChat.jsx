import React from 'react';
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import styles from "./dropdown.module.css"
import { BsChatDots } from 'react-icons/bs';
const chatIcon = ({toggleVisible})=>{
    return(
        <div className={`${styles['icon-in-header']}`} onClick={toggleVisible}>
          <div>
              <span>7</span>
              <BsChatDots  />
            </div>
        </div>

    );
}
const DropChat = () => {
    return (
        <Dropdown El = {chatIcon}>
            <div className="mt-3">
              <ul className={`${styles["list-message"]}`}>
                <p className="dropdown-header">
                You have 3 new messages
                <Link href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                </p>
                
                <hr className={`${styles["mdDivider"]}`}/>

                <li className={`${styles["message-item"]}`}>
                  <Link to={"/profile"}>
                    <div>
                      <div  style={{width : "60px", height: "60px", marginRight : "5px"}}>
                        <img src="https://i.redd.it/qm2eo6qvlot51.jpg" alt="" className='rounded-circle' style={{maxWidth : "95%", maxHeight : "95%"}} />
                      </div>
                        <h5>Maria Hudson</h5>

                    </div>
                    <div className='container'>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p className='d-flex justify-content-end fw-bolder' style={{color : "green"}}>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>

                <hr className={`${styles["mdDivider"]}`}/>

                <li className={`${styles["message-item"]}`}>
                  <Link to={"/profile"}>
                    <div>
                      <div  style={{width : "60px", height: "60px", marginRight : "5px"}}>
                        <img src="https://i.redd.it/qm2eo6qvlot51.jpg" alt="" className='rounded-circle' style={{maxWidth : "95%", maxHeight : "95%"}} />
                      </div>
                        <h5>Maria Hudson</h5>

                    </div>
                    <div className='container'>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p className='d-flex justify-content-end fw-bolder' style={{color : "green"}}>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>

                <hr className={`${styles["mdDivider"]}`}/>

                <li className={`${styles["message-item"]}`}>
                  <Link to={"/profile"}>
                    <div>
                      <div  style={{width : "60px", height: "60px", marginRight : "5px"}}>
                        <img src="https://i.redd.it/qm2eo6qvlot51.jpg" alt="" className='rounded-circle' style={{maxWidth : "95%", maxHeight : "95%"}} />
                      </div>
                        <h5>Maria Hudson</h5>

                    </div>
                    <div className='container'>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p className='d-flex justify-content-end fw-bolder' style={{color : "green"}}>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>

                <hr className={`${styles["mdDivider"]}`}/>

                <li className={`${styles["message-item"]}`}>
                  <Link to={"/profile"}>
                    <div>
                      <div  style={{width : "60px", height: "60px", marginRight : "5px"}}>
                        <img src="https://i.redd.it/qm2eo6qvlot51.jpg" alt="" className='rounded-circle' style={{maxWidth : "95%", maxHeight : "95%"}} />
                      </div>
                        <h5>Maria Hudson</h5>

                    </div>
                    <div className='container'>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p className='d-flex justify-content-end fw-bolder' style={{color : "green"}}>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                
                
                
                <li>
                  <hr className="dropdown-divider"/>
                </li>
              </ul>
          </div>
        </Dropdown>
    );
}

export default DropChat;
