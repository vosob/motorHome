import { FaMapSigns } from 'react-icons/fa';
import { LiaShuttleVanSolid } from 'react-icons/lia';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TbRouteAltLeft } from 'react-icons/tb';

import {
  CardContainer,
  Container,
  ImgItem,
  ImgList,
  ImgText,
  List,
  ListItem,
  MainTitle,
  Text,
  Title,
} from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <Container className="container">
      <MainTitle>Welcome to MotorHome!</MainTitle>
      <Text>
        Welcome to your journey on wheels! At MotorHome, we offer you the finest
        selection of motorhomes for unforgettable travels. Discover the world of
        limitless exploration with us! Our mission is to provide you with
        comfort and safety throughout your journey. With MotorHome, you not only
        get a vehicle but also a new world of experiences that will stay with
        you forever.
      </Text>
      <Title>Why hire a motorhome through MotorHome?</Title>
      <List>
        <CardContainer>
          <ListItem>Choose the perfect motorhome for your travels</ListItem>
          <LiaShuttleVanSolid size={80} color="#E44848" />
        </CardContainer>
        <CardContainer>
          <ListItem>
            Get assistance in planning your route and discovering new places
          </ListItem>
          <TbRouteAltLeft size={80} color="#E44848" />
        </CardContainer>
        <CardContainer>
          <ListItem>
            Enjoy the support of our team at every step of your journey
          </ListItem>
          <MdOutlineSupportAgent size={80} color="#E44848" />
        </CardContainer>
        <CardContainer>
          <ListItem>
            Experience the freedom of travel that only a motorhome can provide.
          </ListItem>
          <FaMapSigns size={80} color="#E44848" />
        </CardContainer>
      </List>

      <Title>Start your unforgettable journey with MotorHome today!</Title>

      <ImgList>
        <li
          style={{
            position: 'relative',
          }}
        >
          <ImgItem src="img-one.png" />
          <ImgText>Affordable Campervans</ImgText>
        </li>
        <li style={{ position: 'relative' }}>
          <ImgItem src="img-two.jpg" />
          <ImgText>Take a Motorhome abroad</ImgText>
        </li>
        <li style={{ position: 'relative' }}>
          <ImgItem src="img-third.jpg" />
          <ImgText>Glastonbury campervan hire</ImgText>
        </li>
        <li style={{ position: 'relative' }}>
          <ImgItem src="img-fourth.jpg" />
          <ImgText>Dog-friendly motorhomes</ImgText>
        </li>
      </ImgList>
    </Container>
  );
};
