import React, {Component} from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  InputNumber,
} from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form';
import {CARD} from '@/utils/data';
import styles from './CardParamsForm.less';

const {Item: FormItem} = Form;
const {Option} = Select;
const { TextArea } = Input;

const CardParamsForm: React.FC<{form: WrappedFormUtils}> = props => {
  const {
    form,
  } = props;

  const onManaClick = (event: React.MouseEvent, item: number) => {
    event.preventDefault();
    form.setFieldsValue({
      mana: `${form.getFieldValue('mana')}{${item}}`,
    });
  };

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 17 },
  };
  const labelDom = (text: string) => (
    <label style={{ color: '#FFF' }}>{text}</label>
  );
  return (
    <Row gutter={24}>
      <Col span={12}>
        <FormItem {...layout} label={labelDom('标题')}>
          {form.getFieldDecorator('title', {
            rules: [
              {required: true, message: '请输入标题！'}
            ],
          })(
            <Input />
          )}
        </FormItem>
      </Col>

      <Col span={24} />

      <Col span={12}>
        <FormItem {...layout} label={labelDom('类型')}>
          {form.getFieldDecorator('type', {
            rules: [
              {required: true, message: '请选择类型！'}
            ],
          })(
            <Select style={{ width: '100%' }}>
              {CARD.type.map((item: { key: string, value: string }) => (
                <Option value={item.key} key={item.key}>{item.value}</Option>
              ))}
            </Select>
          )}
        </FormItem>
      </Col>

      <Col span={12}>
        <FormItem {...layout} label={labelDom('子类型')}>
          {form.getFieldDecorator('subtype', {
          })(
            <Input/>
          )}
        </FormItem>
      </Col>

      {form.getFieldValue('type') === 'biology' ? (
        <Col span={12}>
          <FormItem {...layout} label={labelDom('强度')}>
            {form.getFieldDecorator('strength', {
              rules: [
                {required: true, message: '请输入强度！'}
              ],
            })(
              <InputNumber
                min={0}
                style={{ width: 150 }}
              />
            )}
          </FormItem>
        </Col>
      ) : null}

      <Col span={24} />

      <div>
        <Col span={12}>
          <FormItem {...layout} label={labelDom('费用')}>
            {form.getFieldDecorator('mana', {
              initialValue: '',
              rules: [
                {required: true, message: '请输入费用！'},
                {max: 30},
              ],
            })(
              <Input/>
            )}
          </FormItem>
        </Col>

        <Col span={12}>
          <div className={styles.manaBox}>
            {CARD.mana.map((item: number) => (
              <a
                key={item}
                href="#"
                onClick={event => onManaClick(event, item)}
              >
                <i className={styles[`sprite-${item}`]} />
              </a>
            ))}
          </div>
        </Col>
      </div>

      <Col span={24}>
        <FormItem {...layout} label={labelDom('文本')}>
          {form.getFieldDecorator('description', {
            initialValue: '',
            rules: [
              {required: true, message: '请输入文本！'}
            ],
          })(
            <TextArea
              rows={10}
            />
          )}
        </FormItem>
      </Col>
    </Row>
  );
};

const WrappedCardParamsForm = Form.create({
  onValuesChange: (props, changedValues, allValues) => {

  }
})(CardParamsForm);
export default WrappedCardParamsForm;
