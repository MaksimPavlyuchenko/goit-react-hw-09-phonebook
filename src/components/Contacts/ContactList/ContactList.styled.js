import styled from 'styled-components';

export const HeaderList = styled.h2`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 60px;

  color: #9370db;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;

  width: 660px;
  padding: 20px 40px;
  margin-left: 40px;

  border-radius: 4px;

  background-color: #6495ed;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  margin-bottom: 15px;
  width: 100%;

  font-size: 26px;

  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;

  font-size: 14px;
  padding: 5px 10px;

  cursor: pointer;
  color: #4b0082;
  background-color: #9370db;

  :hover {
    background-color: #4b0082;
    color: #9370db;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
