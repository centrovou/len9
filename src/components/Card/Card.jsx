import React from 'react';
import styles from './Card.module.css';

const Card = ({ id, title, price, imageUrl, onPlus }) => {
  const [offClick, setOffClick] = React.useState(false);

  const onClickChek = () => {
    onPlus({ id, title, price, imageUrl });
    setOffClick(!offClick);
  };
  return (
    <div className={styles.card}>
      <img className={styles.imgurl} width={133} height={112} src={imageUrl} alt="" />
      <p className={styles.title}>{title}</p>
      <div className={styles.cardwrapper}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.button}>
          <img
            onClick={onClickChek}
            className={styles.plus}
            width={30}
            height={30}
            src={
              offClick
                ? './len9/images/sneakers/btn-cheked.svg'
                : './len9/images/sneakers/btn-plus.svg'
            }
            alt="cheked"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
