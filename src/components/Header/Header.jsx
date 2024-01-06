import React, { useContext } from 'react';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import TaskContext from '../UseContext/TaskContext';
import { Link } from 'react-router-dom';
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { onRemoveCart } = useContext(TaskContext);
  return (
    <header className={styles.headear}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img
            className={styles.imgHeader}
            width={40}
            height={40}
            src="images/logo.svg"
            alt="logo"
          />
        </Link>

        <div className={styles.headerTitle}>
          <h3>REACT MAGAS</h3>
          <p>Магазин на React js </p>
        </div>
      </div>
      <div className={styles.headerRight}>
        <Link to="/favorites">
          <img className={styles.fav} width={40} height={40} src="images/fav.svg" alt="" />
        </Link>

        {modalOpen && (
          <Modal onRemove={onRemoveCart} onCloseCart={() => setModalOpen(false)}></Modal>
        )}
        <button className={styles.buttonModal} onClick={() => setModalOpen(true)}>
          <img className={styles.imgCart} width={40} height={40} src="images/cart.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
