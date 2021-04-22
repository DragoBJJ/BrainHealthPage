import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

const LoginInput = styled.input`
  border: 2px solid #fff;
  border-radius: 30px;
  width: 300px;
  height: 50px;
  padding: 20px;
  margin-top: 40px;
  background-color: ${({ touched, error, theme }) =>
    touched && error ? theme.alert : 'transparent'};
  transition: all 0.2s ease-in-out;
  font-size: 2rem;
  color: #fff;
  outline: none;

  ::placeholder {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  &:focus {
    background-color: #fff;
    color: ${({ theme }) => theme.black};
  }
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.alert};
`;

const MyInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;

  return (
    <>
      <LoginInput {...meta} {...field} {...props} />
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};

export default MyInput;
