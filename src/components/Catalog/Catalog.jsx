import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getVehicle } from '../../redux/vehicleCard/cardOperations';
import { selectAllFilters } from '../../redux/vehicleCard/cardSelectors';
import { setCurrentPage } from '../../redux/vehicleCard/cardSlice';
import { CardItem } from '../CardItem/CardItem';
import { LoadMore } from '../LoadMore/LoadMore';

import { CatalogList, Container } from './Catalog.styled';

export const Catalog = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.rent.currentPage);
  const displayedItems = useSelector((state) => state.rent.perPage);

  const selector = useSelector(selectAllFilters);

  useEffect(() => {
    dispatch(getVehicle());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dispatch(setCurrentPage(currentPage + displayedItems));
  };

  return (
    <CatalogList>
      <Container>
        {selector.slice(0, currentPage).map((card) => (
          <CardItem key={card._id} data={card}></CardItem>
        ))}
      </Container>
      {selector.length > currentPage && <LoadMore onClick={handleClick} />}
    </CatalogList>
  );
};
