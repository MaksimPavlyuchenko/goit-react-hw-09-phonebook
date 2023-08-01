import React from 'react';
import { useDispatch } from 'react-redux';

import { userRegister } from 'redux/operationsUser';

import {
  RegistrationForm,
  Input,
  Label,
  Button,
  HeaderRegistraton,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.userName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    dispatch(userRegister({ name, email, password }));
  };
  return (
    <RegistrationForm onSubmit={handlerSubmit}>
      <HeaderRegistraton>REGISTRATION</HeaderRegistraton>
      <Label>
        User Name :
        <Input
          type="text"
          name="userName"
          placeholder="Please Enter Your Name..."
          autoFocus
          autoComplete="true"
        />
      </Label>
      <Label>
        User Email :
        <Input
          type="email"
          name="userEmail"
          placeholder="Please Enter Your Email..."
          autoComplete="true"
        />
      </Label>
      <Label>
        User Password :
        <Input
          type="password"
          name="userPassword"
          placeholder="Please Enter Your Password..."
          autoComplete="true"
        />
      </Label>
      <Button type="submit">I'M READY...</Button>
    </RegistrationForm>
  );
};

export default Register;
