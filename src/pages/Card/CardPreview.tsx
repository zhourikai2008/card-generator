import React, { useState } from 'react';
import {
  Upload,
  message,
} from 'antd';
import { RcFile } from 'antd/lib/upload/interface';
import CropModal from '@/pages/Card/CropModal';
import {CardParams} from '@/pages/Card/CardParamsForm';
import {CARD} from '@/utils/data';
import styles from './CardPreview.less';

export interface CardPreviewProps {
  id?: string,
  data: CardParams,
}

const CardPreview: React.FC<CardPreviewProps> = props => {
  const {
    id,
    data,
  } = props;
  const [ imgUrl, setImgUrl ] = useState<string>();
  const [ cropModalVisible, setCropModalVisible ] = useState<boolean>();

  const beforeUpload = (file: RcFile) => {
    if (file.type.indexOf('image') !== 0) {
      message.error('请上传图片！');
      return false;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImgUrl(reader.result as string);
      setCropModalVisible(true);
    });
    reader.readAsDataURL(file);

    return false;
  };

  const handleCropModalOk = (cropBase64: string) => {
    setImgUrl(cropBase64);
    setCropModalVisible(false);
  }

  return (
    <>
      <div id={id} className={styles.previewBox}>
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
                <i className={styles[`sprite-${CARD.mana[CARD.mana.map(item => item.key).indexOf(mana)].class}`]} />
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

      <CropModal
        visible={cropModalVisible as boolean}
        url={imgUrl as string}
        handleOk={handleCropModalOk}
        handleCancel={() => setCropModalVisible(false)}
      />
    </>
  )
};

export default CardPreview;
