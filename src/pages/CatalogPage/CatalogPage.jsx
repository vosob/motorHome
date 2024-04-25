import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Catalog } from '../../components/Catalog/Catalog';
import { DefButton } from '../../components/DefButton/DefButton';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { VehicleType } from '../../components/VehicleType/VehicleType';
import {
  selectEquipment,
  selectVehicleType,
} from '../../redux/vehicleCard/cardSelectors';
import {
  setAllFilters,
  setResetFilters,
} from '../../redux/vehicleCard/cardSlice';

import {
  CatalogContainer,
  LeftContainer,
  RightContainer,
} from './CatalogPage.styled';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const vehicleType = useSelector(selectVehicleType);

  const [currentCountry, setCurrentCountry] = useState('');
  const [filter, setFilter] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    ShowerWC: false,
    ...(equipment ?? {}),
  });
  const [radio, setRadio] = useState(vehicleType ?? '');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      location: currentCountry,
      equipment: filter,
      vehicleType: radio,
    };
    dispatch(setAllFilters(data));
  };

  const onReset = () => {
    setFilter({
      AC: false,
      Automatic: false,
      Kitchen: false,
      TV: false,
      ShowerWC: false,
    });
    setRadio('');
    dispatch(setResetFilters());
  };

  return (
    <CatalogContainer className="container">
      <LeftContainer onSubmit={onSubmit}>
        <Location
          currentCountry={currentCountry}
          setCurrentCountry={setCurrentCountry}
        />
        <Filters filter={filter} setFilter={setFilter} />
        <VehicleType setRadio={setRadio} radio={radio} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DefButton type={'submit'} text={'Search'} />
          <DefButton
            action={onReset}
            $bgcolor={'bgcolor'}
            type={'button'}
            text={'Reset filters'}
          />
        </div>
      </LeftContainer>
      <RightContainer>
        <Catalog />
      </RightContainer>
    </CatalogContainer>
  );
};
