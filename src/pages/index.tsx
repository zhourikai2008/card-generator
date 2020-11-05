import React, {Component} from 'react';
import {
  Row,
  Col,
} from 'antd';
import CardParamsForm, {CardParams} from '@/pages/Card/CardParamsForm';
import CardPreview from '@/pages/Card/CardPreview';
import styles from './index.less';

export interface GeneratorProps {
}

export interface GeneratorState {
  params: CardParams,
}

export default class Generator extends Component<GeneratorProps, GeneratorState> {
  state = {
    params: {
      id: '',
      title: '',
      type: '',
      subtype: '',
      mana: '',
      description: '',
    },
  };

  handleCardParamsFormChange = (fieldsValues: CardParams) => {
    this.setState({
      params: fieldsValues,
    })
  };

  render () {
    const {
      params,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <Row gutter={24}>
          <Col span={16}>
            <h2 className={styles.lightYellow}>卡牌参数</h2>

            <CardParamsForm
              handleFormChange={this.handleCardParamsFormChange}
            />
          </Col>

          <Col span={8}>
            <h2 className={styles.lightYellow}>卡牌预览</h2>

            <CardPreview
              data={params}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
