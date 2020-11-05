import React, {Component} from 'react';
import {
} from 'antd';
import {CardParams} from '@/pages/Card/CardParamsForm';
import styles from './CardPreview.less';

export interface CardPreviewProps {
  data: CardParams,
}

const CardPreview: React.FC<CardPreviewProps> = props => {
  const {
    data,
  } = props;

  return (
    <div className={styles.previewBox}>
      <div className={styles.header}>
        <p>{data.title}</p>

        <div className={styles.extra}>
          {data.mana && data.mana.split('{').map(item => {
            const indexEnd = item.indexOf('}');
            if (indexEnd === -1) {
              return null;
            }

            const mana = item.substring(0, indexEnd);
            return (
              <i className={styles[`sprite-${mana}`]} />
            )
          })}
        </div>
      </div>

      <div className={styles.imgBox}></div>

      <div className={styles.typeBox}>
        <p>{data.type}{data.subtype ? ` - ${data.subtype}` : null}</p>
      </div>

      <div className={styles.descBox}>
        <pre>{data.description}</pre>
      </div>
    </div>
  )
};

export default CardPreview;
