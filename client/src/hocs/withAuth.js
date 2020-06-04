import React from 'react';
import { useSelector } from 'react-redux';

const withAuth = (Component) => {

  const WrapperComponent = (props) => {
    const authStatus = useSelector((state) => state.condition.authStatus);
    return (authStatus) ? <Component {...props} /> :
      <h1 style={{ fontFamily: "Hand", color: "#8b00ff", fontSize: "40px", textAlign: "center" }}>
        Unauthorized
      </h1>
  }

  return WrapperComponent;
}

export default withAuth;