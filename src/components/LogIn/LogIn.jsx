import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/operationsUser';

import { Input, Label, Button, LogInForm, LogInHeader } from './Login.styled';

const LogIn = () => {
  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    dispatch(userLogIn({ email, password }));
    form.reset();
  };
  return (
    <LogInForm onSubmit={handlerSubmit}>
      <LogInHeader>Hello, are you back?</LogInHeader>
      <Label>
        User Email :
        <Input
          type="email"
          name="userEmail"
          placeholder="Remember Your Email...???"
          autoComplete="true"
        />
      </Label>
      <Label>
        User Password :
        <Input
          type="password"
          name="userPassword"
          placeholder="Remember Your Password...???"
          autoComplete="true"
        />
      </Label>
      <Button type="submit">WOW!!! I REMEMBER...</Button>
    </LogInForm>
  );
};

export default LogIn;
