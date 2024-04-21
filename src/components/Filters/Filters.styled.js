import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 14px;
`;

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const EquipmentFilterText = styled.h2`
  color: #101828;
  /* font-family: Inter; */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const EquipmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 32px;
`;

export const EquipmentBtn = styled.label`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  padding-top: 17px;
  padding-bottom: 17px;

  border-radius: 10px;

  ${(props) =>
    props.$check === !false
      ? 'border: 1px solid #E44848;'
      : 'border: 1px solid rgba(16, 24, 40, 0.2);'};

  background-color: inherit;
  outline: none;
  height: 95px;
  width: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  visibility: hidden;
`;
