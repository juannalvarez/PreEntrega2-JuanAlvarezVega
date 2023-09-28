import './App.css';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartSummaryPage from './pages/CartSummaryPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<AboutPage />} />
            <Route path='/carrito' element={<CartSummaryPage />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
