import React, { useState } from 'react';
import {
  Upload,
  message,
} from 'antd';
import {CardParams} from '@/pages/Card/CardParamsForm';
import styles from './CardPreview.less';
import { RcFile } from 'antd/lib/upload/interface';

export interface CardPreviewProps {
  data: CardParams,
}

const CardPreview: React.FC<CardPreviewProps> = props => {
  const {
    data,
  } = props;
  const [ imgUrl, setImgUrl ] = useState<string>();

  const beforeUpload = (file: RcFile) => {
    if (file.type.indexOf('image') !== 0) {
      message.error('请上传图片！');
      return false;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImgUrl(reader.result as string);
    });
    reader.readAsDataURL(file);

    return false;
  };

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

      <div className={styles.imgBox}>
        <Upload
          name="artwork"
          showUploadList={false}
          beforeUpload={beforeUpload}
          className="imgUpload"
        >
          {imgUrl ? <img src={imgUrl} alt="artwork" /> : (
            <div className={styles.btnBox}>
              上传图片
            </div>
          )}
        </Upload>
      </div>

      <div className={styles.typeBox}>
        <p>{data.type}{data.subtype ? ` - ${data.subtype}` : null}</p>
      </div>

      <div className={styles.descBox}>
        <pre>{data.description}</pre>
      </div>

      {data.strength ? (
        <div className={styles.strengthBox}>
          <div>{data.strength}</div>
        </div>
      ) : null}
    </div>
  )
};

export default CardPreview;
