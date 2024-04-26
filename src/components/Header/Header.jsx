import { HeaderContainer, HeaderLink } from './Header.styled.js';

export const Header = () => {
  return (
    <HeaderContainer className="headerContainer">
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">FavoritesPage</HeaderLink>
      <HeaderLink to="/catalog">CatalogPage</HeaderLink>
    </HeaderContainer>
  );
};
