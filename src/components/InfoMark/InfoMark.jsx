import styled from 'styled-components';

const Mark = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextMark = styled.p`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const Container = styled.div`
  background: #f2f4f7;
  border-radius: 100px;
  display: flex;
  gap: 8px;
  width: max-content;
  padding: 12px 18px;
`;

export const InfoMark = ({ text, svg }) => {
  return (
    <Mark>
      <Container>
        <p>{svg}</p>
        <TextMark>{text}</TextMark>
      </Container>
    </Mark>
  );
};
