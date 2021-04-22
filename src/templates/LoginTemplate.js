import React from 'react';
import styled from 'styled-components';
import galaktyka from 'assets/images/galaktyka.jpg';
import LoginForm from 'components/molecules/Form/Form';

const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${galaktyka});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

const LoginTemplate = () => {
  return (
    <>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </>
  );
};

export default LoginTemplate;
