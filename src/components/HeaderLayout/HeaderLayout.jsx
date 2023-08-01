import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/selectors';

import {
  WrapperHeader,
  StyledLink,
  StyledLinkContact,
  Container,
  Helmet,
  NameApplication,
} from './HeaderLayout.styled';

const HeaderLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(selectUser);

  return (
    <Container>
      <WrapperHeader>
        {isLoggedIn ? (
          <StyledLinkContact to="/contacts">{`Contact List by ${userName}`}</StyledLinkContact>
        ) : (
          <>
            <Helmet>
              Welcome to <NameApplication>'PHONEBOOK'</NameApplication> created
              by Maks Pavlyuchenko
            </Helmet>
            <StyledLink to="/login">LOG IN</StyledLink>
            <StyledLink to="/register">REGISTER</StyledLink>
          </>
        )}
      </WrapperHeader>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default HeaderLayout;
