import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border-radius: 200px;
  background: #e44848;
  outline: none;
  border: none;
  padding: 16px 40px;
`;

export const DefButton = ({ text, type }) => {
  return <Button type={type}>{text}</Button>;
};
