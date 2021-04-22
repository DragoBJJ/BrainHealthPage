import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Button } from 'components/atoms/button/Button';

import phone from 'assets/images/phone.svg';

import { Formik, Form } from 'formik';
import MyInput from 'components/molecules/Input/FormikInput';
import * as Yup from 'yup';

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 460px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.black};

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -60px;
`;

const WrapperImage = styled.div`
  max-width: 200px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const StyledButton = styled(Button)`
  display: flex;
  height: 50px;
  width: 150px;
  border-radius: 30px;
  margin: 30px 0;
`;

const Link = styled(NavLink)`
  position: absolute;
  font-size: 5rem;
  color: #fff;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const LoginForm = () => {
  const loginSchema = Yup.object({
    login: Yup.string().min(2, 'To short !').required('Login is required !'),
    password: Yup.string().min(8, 'To short !').required('Password is required !'),
  });
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormWrapper>
            {console.log(isSubmitting)}
            <WrapperImage>
              <Image src={phone} />
            </WrapperImage>
            <WrapperInput>
              <MyInput name="login" type="text" placeholder="login" />
              <MyInput name="password" type="password" placeholder="password" />
            </WrapperInput>
            <StyledButton type="submit" disabled={isSubmitting}>
              Sign In
            </StyledButton>
            <Link to="/">
              <TiArrowBackOutline />
            </Link>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
