import { Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
