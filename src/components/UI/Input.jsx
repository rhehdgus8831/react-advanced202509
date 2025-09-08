import React from 'react';
import styles from './Input.module.scss';

// 재사용 가능한 컴포닌트 만들고 싶음.
const Input = ({ label }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input />
    </div>
  );
};

export default Input;
