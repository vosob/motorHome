import { CiLocationOn } from 'react-icons/ci';
import { useSelector } from 'react-redux';

import {
  selectLocation,
  selectUniqueLocations,
} from '../../redux/vehicleCard/cardSelectors';

import { Container, CustomSelect, SvgLocation, Text } from './Location.styled';

export const Location = ({ currentCountry, setCurrentCountry }) => {
  const select = useSelector(selectUniqueLocations);
  const selected = useSelector(selectLocation);

  const options = select.map((option) => {
    return {
      value: option.split(', ')[1],
      label: option,
    };
  });

  const getValue = () => {
    return currentCountry
      ? options.find((c) => c.value === currentCountry)
      : '';
  };

  const onChange = (newValue) => {
    setCurrentCountry(newValue.value);
  };

  const currentLocation = options.map((option) => option.value);

  return (
    <>
      <Text>Location</Text>
      <Container>
        <SvgLocation>
          <CiLocationOn />
        </SvgLocation>
        <CustomSelect
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getValue()}
          options={options}
          // placeholder="City"
          placeholder={currentLocation.includes(selected) ? selected : 'City'}
        />
      </Container>
    </>
  );
};
