import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Btn = styled.div`
  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border-radius: 200px;
  background: inherit;
  outline: none;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  padding: 16px 32px;
  cursor: pointer;
`;

export const LoadMore = ({ onClick }) => {
  return (
    <Container>
      <Btn onClick={onClick} type="button">
        Load more
      </Btn>
    </Container>
  );
};
