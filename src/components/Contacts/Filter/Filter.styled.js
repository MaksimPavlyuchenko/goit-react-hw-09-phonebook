import styled from 'styled-components';

export const WrapperInput = styled.div`
  width: 440px;

  margin-top: 20px;
  margin-left: 40px;

  padding: 20px;

  border-radius: 4px;
  border: 1px solid transparent;
  color: #4b0082;
  background-color: #6495ed;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Label = styled.label`
  display: block;

  text-align: center;

  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 420px;

  border: 1px solid transparent;
  border-radius: 4px;

  padding: 10px;
  margin-top: 10px;

  font-size: 16px;

  cursor: pointer;
  outline: none;

  background-color: #9370db;

  :hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
