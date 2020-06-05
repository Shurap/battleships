import React from 'react';
import { useSelector } from 'react-redux';

const withAuth = (Component) => {

  const WrapperComponent = (props) => {
    const authStatus = useSelector((state) => state.condition.authStatus);
    return (authStatus) ? <Component {...props} /> :
      (
        <div style={{ fontFamily: "Hand", color: "#8b00ff", fontSize: "20px", textAlign: "center" }}>
          <h1>Unauthorized</h1>
          <a href="http://battle-sea.herokuapp.com/login">Press here</a>
        </div>
      )
  }

  return WrapperComponent;
}

export default withAuth;