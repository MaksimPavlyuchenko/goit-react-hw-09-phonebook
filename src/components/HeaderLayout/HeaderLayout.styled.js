import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0px 15px 80px 15px;
  margin-top: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  width: 1400px;

  border: 1px solid #808080;
  border-radius: 4px;

  background-color: #6495ed;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Helmet = styled.h2`
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 30px;
  font-weight: 500;
  color: #9370db;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
export const NameApplication = styled.span`
  font-size: 40px;
  color: #4b0082;
`;
export const StyledLinkContact = styled(NavLink)`
  margin-right: auto;
  text-decoration: none;
  font-size: 40px;
  font-weight: 500;
  color: #9370db;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    color: #4b0082;
  }
  &.active {
    color: #4b0082;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;

  text-decoration: none;
  font-size: 40px;
  font-weight: 500;
  color: #9370db;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    color: #4b0082;
  }
  &.active {
    color: #4b0082;
  }
`;
