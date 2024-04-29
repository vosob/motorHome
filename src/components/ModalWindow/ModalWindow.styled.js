import styled from 'styled-components';

export const NameContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const PriceText = styled.p`
  color: #101828;
  /* font-family: Inter; */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const ImgContainer = styled.div``;

export const ItemContainer = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Item = styled.div`
  background-image: url(${(props) => props.$image});
  min-width: 290px;
  min-height: 310px;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  /* max-height: 72px; */
`;

export const Text = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ButtonContainer = styled.div``;
