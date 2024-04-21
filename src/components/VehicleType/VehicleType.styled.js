import styled from 'styled-components';

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const Text = styled.h2`
  color: #101828;
  /* font-family: Inter; */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 32px;
`;

export const FilterBtn = styled.button`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  padding-top: 17px;
  padding-bottom: 17px;

  border: 1px solid rgba(16, 24, 40, 0.2);

  border-radius: 10px;
  background-color: inherit;
  outline: none;

  height: 95px;
  width: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Svg = styled.svg`
  width: 40xp;
  height: 28px;
`;

export const SvgText = styled.p`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const SvgContainer = styled.label`
  padding-top: 17px;
  padding-bottom: 17px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: inherit;
  outline: none;

  height: 95px;
  width: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputRadio = styled.input`
  /* visibility: hidden; */
`;
