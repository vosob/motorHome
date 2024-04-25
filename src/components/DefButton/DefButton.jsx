import styled from 'styled-components';

const Button = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border-radius: 200px;
  outline: none;
  border: none;
  padding: 16px 40px;
  background: ${(props) => (props.$bgcolor ? 'inherit' : '#e44848')};
  color: ${(props) => (props.$bgcolor ? 'inherit' : '#fff')};
  border: ${(props) =>
    props.$bgcolor ? '1px solid rgba(71, 84, 103, 0.2)' : 'none'};
`;

export const DefButton = ({ text, type, $bgcolor, action }) => {
  return (
    <Button onClick={() => action()} $bgcolor={$bgcolor} type={type}>
      {text}
    </Button>
  );
};
