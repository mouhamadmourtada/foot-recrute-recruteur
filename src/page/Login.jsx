import React, { useState } from 'react';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez effectuer une requête API pour authentifier l'utilisateur
    // et obtenir le token si les informations d'identification sont valides.
    // Pour cet exemple, nous allons simplement valider que l'e-mail et le mot de passe sont saisis.

    if (email === '' || password === '') {
      setError('Veuillez saisir l\'e-mail et le mot de passe.');
    } else {
      setError('');
      setToken("this is a test token");
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Connexion</div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Entrez votre e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
