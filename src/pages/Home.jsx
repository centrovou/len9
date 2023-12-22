import React from 'react';
import Card from '../components/Card/Card';

const Home = ({ items, addToCart }) => {
  return (
    <div>
      <div className="content">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
