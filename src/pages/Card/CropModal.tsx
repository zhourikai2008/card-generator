import React, { useState } from 'react';
import {
  message,
  Modal,
} from 'antd';
import ReactCrop, { Crop, PercentCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './CropModal.less';

export interface CropModalProps {
  visible: boolean,
  url: string,
  handleOk: (cropBase64: string) => void,
  handleCancel: () => void,
}

const CropModal: React.FC<CropModalProps> = props => {
  const {
    visible,
    url,
    handleOk,
    handleCancel,
  } = props;

  const [ crop, setCrop ] = useState<Crop>({
    unit: '%',
    width: 30,
    aspect: 4 / 3,
  });
  const [ imageRef, SetImageRef ] = useState<HTMLImageElement>();

  const onImageLoaded = (image: HTMLImageElement) => {
    SetImageRef(image);
  };

  const onCropChange = (crop: Crop, percentCrop: PercentCrop) => {
    setCrop(crop);
  };

  const getCroppedImgBase64 = (image: HTMLImageElement, crop: Crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width as number;
    canvas.height = crop.height as number;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.drawImage(
      image,
      crop.x as number * scaleX,
      crop.y as number * scaleY,
      crop.width as number * scaleX,
      crop.height as number * scaleY,
      0,
      0,
      crop.width as number,
      crop.height as number
    );

    return canvas.toDataURL('image/png');
  }

  const onOk = () => {
    handleOk(getCroppedImgBase64(imageRef as HTMLImageElement, crop));
  };

  const ModalWidth = imageRef && imageRef.naturalWidth + 50;
  return (
    <Modal
      title="图片裁剪"
      width="auto"
      style={{
        maxWidth: '100%',
      }}
      centered
      destroyOnClose
      maskClosable={false}
      visible={visible}
      onOk={onOk}
      onCancel={handleCancel}
    >
      <ReactCrop
        src={url}
        crop={crop}
        ruleOfThirds
        onImageLoaded={onImageLoaded}
        onChange={onCropChange}
      />
    </Modal>
  )
};

export default CropModal;
