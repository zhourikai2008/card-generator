import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
} from 'antd';
import {connect} from 'dva';
import html2canvas from 'html2canvas';
import { ConnectState } from '@/models/connect';
import CardParamsForm, {CardParams} from '@/pages/Card/CardParamsForm';
import CardPreview from '@/pages/Card/CardPreview';
import styles from './index.less';

declare function download (data: any, strFileName?: string, strMimeType?: string): void;

export interface GeneratorProps {
}

export interface GeneratorState {
  params: CardParams,
}

class Generator extends Component<GeneratorProps, GeneratorState> {
  state = {
    params: {
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

  handleCreateCard = () => {
    const {
    } = this.state;

    html2canvas(document.getElementById('card_preview') as HTMLElement).then((canvas: HTMLCanvasElement) => {
      download(canvas.toDataURL('image/png'), 'test.png', 'image/png');
    });
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

            <div className={styles.btnBox}>
              <Button type="primary" onClick={this.handleCreateCard}>生成卡牌</Button>
            </div>
          </Col>

          <Col span={8}>
            <h2 className={styles.lightYellow}>卡牌预览</h2>

            <CardPreview
              id={`card_preview`}
              data={params}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(({ card, loading }: ConnectState) => ({
  card,
}))(Generator);
