import React, {Component} from 'react';
import {
  Form,
  Row,
  Col,
} from 'antd';
import styles from './CardPreview.less';

const {Item: FormItem} = Form;

const CardParamsForm: React.FC<{form: object}> = props => {
  const {
    form,
  } = props;

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  };
  return (
    <>
    </>
  );
};

const WrappedCardParamsForm = Form.create()(CardParamsForm);
export default WrappedCardParamsForm;
