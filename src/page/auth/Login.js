// // Login.js
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../index'; // Importer le contexte d'authentification depuis index.js

// const Login = () => {
//   const { isLoggedIn, login } = useContext(AuthContext);
//   const history = useNavigate();

//   const handleLogin = () => {
//     // Logique de connexion (vous pouvez utiliser une API pour l'authentification ici)
//     login();
//     history.push('/'); // Rediriger vers la page d'accueil après la connexion réussie
//   };

//   return (
//     <div>
//       <h1>Connexion</h1>
//       {isLoggedIn ? (
//         <p>Vous êtes déjà connecté !</p>
//       ) : (
//         <button onClick={handleLogin}>Se connecter</button>
//       )}
//     </div>
//   );
// };

// export default Login;



