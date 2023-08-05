// Dashboard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../index';


const Dashboard = () => {
//   const { isLoggedIn, logout } = useContext(AuthContext);

    const deconnexion = ()=>{

    }

  return (
    <div>
      {/* vous êtes connecté !
      <button className='btn'><Link to="/logout">Connexion</Link></button> */}

      <p>vous êtes dans le composant princiapl</p>
       

    </div>
  );
};

export default Dashboard;

