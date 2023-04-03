import React from 'react';

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuthenticated = document.cookie
    console.log(document.cookie)
    if (true) {
      return <Component {...props} />;
    }
  };

  return AuthRoute;
};

export default withAuth;
