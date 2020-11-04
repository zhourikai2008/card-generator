import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>卡牌生成器</h1>
      </div>

      {props.children}
    </div>
  );
};

export default BasicLayout;
