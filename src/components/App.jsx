import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { Container } from './App.styled';
import Layout from '../components/Layout/Layout';
import GlobalStyles from '../assets/GlobalStyle/GlobalStyles';

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

const App = () => {
  return (
    <>
     <GlobalStyles />
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<Home />} />
        </Route>
        </Routes>
        </>
    
  );
};

export default App;