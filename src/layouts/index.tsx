import React from 'react';
import Link from 'umi/link';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.title}>卡牌生成器</h1>
        </Link>
      </div>

      {props.children}
    </div>
  );
};

export default BasicLayout;
