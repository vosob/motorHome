import styled from 'styled-components';

export const CardImg = styled.div`
  min-width: 290px;
  min-height: 310px;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid rgba(16, 23, 40, 0.2);
  padding: 24px;
`;

export const NameAndPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const ItemName = styled.h1`
  color: #101828;
  /* font-family: Inter; */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;
export const SvgContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const RightContainer = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  overflow: hidden;
  color: #475467;
  /* height: 24px; */
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const SvgHeart = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -8px;
  z-index: 1;
  width: 24px;
  height: 24px;
`;
