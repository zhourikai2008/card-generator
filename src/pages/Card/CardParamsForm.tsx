import React, {Component} from 'react';
import {
  Form,
  Row,
  Col,
  Input,
} from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form';
import styles from './CardParamsForm.less';

const {Item: FormItem} = Form;

const CardParamsForm: React.FC<{form: WrappedFormUtils}> = props => {
  const {
    form,
  } = props;

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  };
  return (
    <>
      <FormItem {...layout} label={`标题`}>
        {form.getFieldDecorator('id', {
          rules: [
            {required: true, message: '请输入标题！'}
          ],
        })(
          <Input />
        )}
      </FormItem>
    </>
  );
};

const WrappedCardParamsForm = Form.create()(CardParamsForm);
export default WrappedCardParamsForm;
