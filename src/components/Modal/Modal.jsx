import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import styles from './Orwerflow.module.css';
import TaskContext from '../UseContext/TaskContext';

const Modal = ({ onCloseCart, onRemove }) => {
  const { cartItems } = useContext(TaskContext);

  return createPortal(
    <>
      <div className={styles.opacityBlock}>
        <div className={styles.owerflow}>
          <h3 className={styles.names}>
            Корзина
            <img
              onClick={onCloseCart}
              className={styles.removeBtn}
              src="images/sneakers/btn-exit.svg"
              alt=""
            />
          </h3>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cardItem}>
                <img
                  className={styles.img}
                  width={70}
                  height={70}
                  src={item.imageUrl}
                  alt="hello"
                />
                <div className={styles.blockInfo}>
                  <p className={styles.titleitem}>{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(item.id)}
                  className={styles.removeBtn}
                  src="images/sneakers/btn-exit.svg"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal'),
  );
};

export default Modal;
