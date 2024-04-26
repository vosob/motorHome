import { BsPeople } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { IoBedOutline } from 'react-icons/io5';
import { MdOutlineLocalGasStation } from 'react-icons/md';
import { MdAir } from 'react-icons/md';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

import { selectLiked } from '../../redux/vehicleCard/cardSelectors';
import { setDeleteLiked, setLiked } from '../../redux/vehicleCard/cardSlice';
import { DefButton } from '../DefButton/DefButton';
import { InfoMark } from '../InfoMark/InfoMark';

import {
  CardImg,
  Container,
  Description,
  ItemName,
  NameAndPriceContainer,
  RatingContainer,
  RightContainer,
  SvgContainer,
} from './CardItem.styled';

export const CardItem = ({ data }) => {
  const dispatch = useDispatch();
  const select = useSelector(selectLiked);

  const onClick = (e) => {
    e.preventDefault();

    if (!select.some((i) => i._id === data._id)) {
      dispatch(setLiked(data));
    } else {
      dispatch(setDeleteLiked(data));
    }
  };

  return (
    <Container>
      <CardImg $img={data.gallery[0]} />
      <RightContainer>
        <NameAndPriceContainer>
          <ItemName>{data.name}</ItemName>
          <SvgContainer>
            <p>{`€${data.price}`}</p>
            <div onClick={onClick} style={{ position: 'relative' }}>
              {select.some((item) => {
                return item._id === data._id;
              }) ? (
                <FaHeart size={24} color="red" />
              ) : (
                <CiHeart size={24} />
              )}
            </div>
          </SvgContainer>
        </NameAndPriceContainer>
        <RatingContainer>
          <FaStar color="gold" />
          <p>{data.rating}</p>
          <CiLocationOn />
          <p>{data.location}</p>
        </RatingContainer>
        <div style={{ width: '525px', marginBottom: '24px' }}>
          <Description>{data.description}</Description>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          <InfoMark
            svg={<BsPeople size={20} />}
            text={`${data.adults} adults`}
          />
          <InfoMark
            svg={<TbAutomaticGearbox size={20} />}
            text={`${data.transmission}`}
          />
          <InfoMark
            svg={<MdOutlineLocalGasStation size={20} />}
            text={`${data.engine}`}
          />
          <InfoMark
            svg={<TbToolsKitchen2 size={20} />}
            text={`${data.details.kitchen} kitchen`}
          />
          <InfoMark
            svg={<IoBedOutline size={20} />}
            text={`${data.details.beds} beds`}
          />
          <InfoMark
            svg={<MdAir size={20} />}
            text={`${data.details.airConditioner} AC`}
          />
        </div>
        <DefButton text={'Show more'}>Show more</DefButton>
      </RightContainer>
    </Container>
  );
};
