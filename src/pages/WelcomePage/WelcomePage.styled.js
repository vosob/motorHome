import styled from 'styled-components';

export const Container = styled.div``;

export const MainTitle = styled.h1`
  font-family: Inter;
  color: #475467;
  line-height: 24px;

  text-align: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: Inter;
  color: #475467;
  line-height: 24px;

  text-align: center;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  font-family: Inter;
  color: #475467;
  line-height: 24px;

  text-align: center;
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  font-family: Inter;
  color: #475467;
  line-height: 24px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

export const ImgList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

export const ImgItem = styled.img`
  border-radius: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImgText = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 20px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  margin: 0;
`;
