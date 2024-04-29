import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import Modal from 'react-modal';

import {
  ButtonContainer,
  ImgContainer,
  Item,
  ItemContainer,
  NameContainer,
  PriceText,
  RatingContainer,
  Text,
  TextContainer,
} from './ModalWindow.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.40)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '982px',
    maxHeight: '720px',
    padding: '40px',
    borderRadius: '20px',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ state, toggle, setState, data }) => {
  function closeModal() {
    setState(false);
  }

  return (
    <Modal
      isOpen={state}
      onRequestClose={toggle}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <NameContainer>
        <h2>{data.name}</h2>
        {/* <button onClick={closeModal}>Close Modal</button> */}
        <RxCross2 style={{ cursor: 'pointer' }} onClick={closeModal} />
      </NameContainer>

      <RatingContainer>
        <FaStar color="gold" />
        <p style={{ textDecorationLine: 'underline' }}>
          {data.rating}({data.reviews.length} Reviews)
        </p>
        <CiLocationOn />
        <p>{data.location}</p>
      </RatingContainer>

      <div>
        <PriceText>{`€${data.price.toFixed(2)}`}</PriceText>
      </div>

      <ImgContainer>
        <ItemContainer>
          {data.gallery.map((item, index) => (
            <li key={index}>
              <Item $image={item} />
            </li>
          ))}
        </ItemContainer>
      </ImgContainer>

      <TextContainer>
        <Text>{data.description}</Text>
      </TextContainer>

      <ButtonContainer>
        <button>Features</button>
        <button>Reviews</button>
      </ButtonContainer>
    </Modal>
  );
};
