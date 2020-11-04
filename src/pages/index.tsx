import React, {Component} from 'react';
import {
  Form,
  Row,
  Col,
} from 'antd';
import CardParamsForm from '@/pages/Card/CardParamsForm';
import CardPreview from '@/pages/Card/CardPreview';
import styles from './index.less';

const {Item: FormItem} = Form;

export default class Generator extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <Row gutter={24}>
          <Col span={16}>
            <h2 className={styles.lightYellow}>卡牌参数</h2>

            <CardParamsForm
            />
          </Col>

          <Col span={8}>
            <h2 className={styles.lightYellow}>卡牌预览</h2>

            <CardPreview
            />
          </Col>
        </Row>
      </div>
    );
  }
}