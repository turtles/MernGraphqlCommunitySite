import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const loginStyle = styled.p`
  font-size: 1.1em
`;

const activateText = styled.p`
  font-size: .75em,
  margin-top: .25em
`;

const LoginInfo = ({username, activated})=>{
  return (
    <div>
      <loginStyle>Logged in as {username}</loginStyle>
      {
        activated ? null : (
          <activateText>
            Check your email to activate your account.<br/>
            <Link to='/resendActivationEmail'>Resend activation email?</Link>
          </activateText>
        )
      }
    </div>
  );
}

export default LoginInfo;
