import { React, useReducer, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import Header from './components/Header/Header';
import './index.css';
import { useEffect } from 'react';
import TaskContext from './components/UseContext/TaskContext';
import { Route, Routes } from 'react-router-dom';
import { initialState, reducer } from './components/reducer/UseReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState([]); // отоброжение карточек каталог на главной через api
  const { cartItems } = state;
  useEffect(() => {
    //рендер из API в каталог
    fetch('https://519a1c6620d82e0d.mokky.dev/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });

    //рендер состояния корзины
    fetch('https://519a1c6620d82e0d.mokky.dev/cart')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_CART_ITEMS', payload: data });
      });
  }, []);
  //удаление из корзины товара
  const onRemoveCart = (id) => {
    fetch(`https://519a1c6620d82e0d.mokky.dev/cart/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: 'ON_REMOVE_CART', payload: id });
      });
  };
  // добавление из католога в корзину
  const addToCart = (obj) => {
    fetch('https://519a1c6620d82e0d.mokky.dev/cart', obj)
      .then((res) => res.json())
      .then(() => {
        dispatch({ type: 'ADD_TO_CART', payload: obj });
      });
  };

  return (
    <TaskContext.Provider value={{ cartItems, onRemoveCart }}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} items={items} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<div>error 404 back</div>} />
        </Routes>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
