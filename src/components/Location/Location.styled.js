import Select from 'react-select';
import styled from 'styled-components';

export const SvgLocation = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
  z-index: 1;
  width: 18px;
  height: 20px;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  margin-bottom: 8px;
`;

export const CustomSelect = styled(Select).attrs({
  className: 'custom-select',
})`
  width: 360px;

  & .custom-select__single-value {
    color: #101828;
    /* font-family: Inter; */
    margin-left: 44px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    box-shadow: none !important;
  }

  & .custom-select__input-container {
    padding: 18px 218px 18px 40px;
  }

  & .custom-select__indicator-separator {
    display: none;
  }

  & .custom-select__placeholder {
    margin-left: 44px;
  }
`;
