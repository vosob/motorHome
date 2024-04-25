import { FiTv } from 'react-icons/fi';
import { LuShowerHead } from 'react-icons/lu';
import { MdAir } from 'react-icons/md';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { TbToolsKitchen2 } from 'react-icons/tb';

import {
  Container,
  Divider,
  EquipmentBtn,
  EquipmentContainer,
  EquipmentFilterText,
  Input,
  Text,
} from './Filters.styled';

export const Filters = ({ setFilter, filter }) => {
  // const selected = useSelector(selectEquipment);
  const onClick = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setFilter({ ...filter, [name]: checked });
  };

  return (
    <>
      <Text>Filters</Text>
      <Container>
        <EquipmentFilterText>Vehicle equipment</EquipmentFilterText>
        <Divider />
        <EquipmentContainer>
          <EquipmentBtn $check={filter.AC}>
            <Input name="AC" onClick={onClick} type="checkbox" />
            <MdAir size={32} />
            <p>AC</p>
          </EquipmentBtn>
          <EquipmentBtn $check={filter.Automatic}>
            <Input name="Automatic" onClick={onClick} type="checkbox" />
            <TbAutomaticGearbox size={32} />
            <p>Automatic</p>
          </EquipmentBtn>
          <EquipmentBtn $check={filter.Kitchen}>
            <Input name="Kitchen" onClick={onClick} type="checkbox" />
            <TbToolsKitchen2 size={32} />
            <p>Kitchen</p>
          </EquipmentBtn>
          <EquipmentBtn $check={filter.TV}>
            <Input name="TV" onClick={onClick} type="checkbox" />
            <FiTv size={32} />
            <p>TV</p>
          </EquipmentBtn>
          <EquipmentBtn $check={filter.ShowerWC}>
            <Input name="ShowerWC" onClick={onClick} type="checkbox" />
            <LuShowerHead size={32} />
            <p>Shower/WC</p>
          </EquipmentBtn>
        </EquipmentContainer>
      </Container>
    </>
  );
};
