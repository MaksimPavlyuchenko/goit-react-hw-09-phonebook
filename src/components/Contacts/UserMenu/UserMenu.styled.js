import styled from 'styled-components';

export const WrapperLogOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin-top: 40px;
  width: 400px;

  font-size: 26px;

  border-radius: 4px;
  border: 1px solid transparent;

  background-color: #6495ed;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const ButtonLogOut = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;

  width: 200px;

  font-size: 16px;
  font-weight: 700;
  padding: 10px 10px;

  cursor: pointer;
  color: #4b0082;
  background-color: #9370db;

  :hover {
    background-color: #4b0082;
    color: #9370db;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
