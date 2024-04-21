import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Catalog } from '../../components/Catalog/Catalog';
import { DefButton } from '../../components/DefButton/DefButton';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { VehicleType } from '../../components/VehicleType/VehicleType';
import { setAllFilters } from '../../redux/vehicleCard/cardSlice';

import {
  CatalogContainer,
  LeftContainer,
  RightContainer,
} from './CatalogPage.styled';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState('');
  const [filter, setFilter] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    ShowerWC: false,
  });
  const [radio, setRadio] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      location: currentCountry,
      equipment: filter,
      vehicleType: radio,
    };
    dispatch(setAllFilters(data));
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
        <DefButton type={'submit'} text={'Search'} />
      </LeftContainer>
      <RightContainer>
        <Catalog />
      </RightContainer>
    </CatalogContainer>
  );
};
