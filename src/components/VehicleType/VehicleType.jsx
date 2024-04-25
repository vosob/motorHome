import { useSelector } from 'react-redux';

import { selectVehicleType } from '../../redux/vehicleCard/cardSelectors';
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

export const VehicleType = ({ setRadio, radio }) => {
  const vehicleType = useSelector(selectVehicleType);

  const onClick = (e) => {
    const target = e.target.value;
    setRadio(target);
  };
  return (
    <>
      <Text>VehicleType</Text>
      <Divider />
      <FilterContainer>
        <SvgContainer $active={radio === 'panelTruck'}>
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
        <SvgContainer $active={radio === 'fullyIntegrated'}>
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
        <SvgContainer $active={radio === 'alcove'}>
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
