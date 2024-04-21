import sprite from '../Icons/sprite.svg';

import {
  Divider,
  FilterContainer,
  InputRadio,
  Svg,
  SvgContainer,
  SvgText,
  Text,
} from './VehicleType.styled';

export const VehicleType = ({ setRadio }) => {
  const onClick = (e) => {
    const target = e.target.value;
    setRadio(target);
  };

  return (
    <>
      <Text>VehicleType</Text>
      <Divider />
      <FilterContainer>
        <SvgContainer>
          <InputRadio
            onClick={onClick}
            type="radio"
            value="panelTruck"
            name="radio"
          />
          <Svg>
            <use href={`${sprite}#icon-Van`} />
          </Svg>
          <SvgText>Van</SvgText>
        </SvgContainer>
        <SvgContainer>
          <InputRadio
            onClick={onClick}
            type="radio"
            value="fullyIntegrated"
            name="radio"
          />
          <Svg>
            <use href={`${sprite}#icon-Fully-Integrated`} />
          </Svg>
          <SvgText>Fully Integrated</SvgText>
        </SvgContainer>
        <SvgContainer>
          <InputRadio
            onClick={onClick}
            type="radio"
            value="alcove"
            name="radio"
          />
          <Svg>
            <use href={`${sprite}#icon-Alcove`} />
          </Svg>
          <SvgText>Alcove</SvgText>
        </SvgContainer>
      </FilterContainer>
    </>
  );
};
