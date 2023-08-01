import styled from 'styled-components';

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px;
  width: 400px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;

  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #6495ed;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const LogInHeader = styled.h2`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 40px;

  color: #9370db;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
export const Label = styled.label`
  text-align: start;
  font-size: 20px;
  font-weight: 500;

  color: #4b0082;
`;
export const Input = styled.input`
  border: 1px solid transparent;
  border-radius: 4px;

  padding: 10px;
  margin-top: 10px;
  width: 400px;

  cursor: pointer;
  outline: none;
  font-size: 16px;
  background-color: #9370db;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
export const Button = styled.button`
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
