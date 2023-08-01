import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogOut } from 'redux/operationsUser';
import { selectEmail } from 'redux/selectors';

import { WrapperLogOut, ButtonLogOut } from './UserMenu.styled';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);

  const handlerClickLogOut = () => {
    dispatch(userLogOut());
    navigate('/login', { replace: true });
  };
  return (
    <WrapperLogOut>
      <p>{email}</p>
      <ButtonLogOut type="button" onClick={handlerClickLogOut}>
        LOG OUT
      </ButtonLogOut>
    </WrapperLogOut>
  );
};

export default UserMenu;
