import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CardItem } from '../../components/CardItem/CardItem.jsx';
import {
  CatalogList,
  Container,
} from '../../components/Catalog/Catalog.styled';
import { LoadMore } from '../../components/LoadMore/LoadMore';
import { selectLiked } from '../../redux/vehicleCard/cardSelectors';
import { setCurrentPage } from '../../redux/vehicleCard/cardSlice';

export const FavoritesPage = () => {
  const select = useSelector(selectLiked);
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.rent.currentPage);
  const displayedItems = useSelector((state) => state.rent.perPage);

  const handleClick = () => {
    dispatch(setCurrentPage(currentPage + displayedItems));
  };

  return (
    <>
      <CatalogList
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container style={{ width: '890px', marginTop: '40px' }}>
          {select.slice(0, currentPage).map((card) => (
            <CardItem key={card._id} data={card}></CardItem>
          ))}
        </Container>
        {select.length > currentPage && <LoadMore onClick={handleClick} />}
      </CatalogList>
    </>
  );
};
