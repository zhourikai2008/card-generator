import React, {Component} from 'react';
import {
  Row,
  Col,
  Spin,
  message,
} from 'antd';
import { connect, Dispatch } from 'dva';
import router from 'umi/router';
import html2canvas from 'html2canvas';
import { ConnectState } from '@/models/connect';
import CardParamsForm, {CardParams} from '@/pages/Card/CardParamsForm';
import CardPreview from '@/pages/Card/CardPreview';
import Result from '@/utils/Result';
// import { download } from '@/utils/download';
import styles from './Index.less';

export interface GeneratorProps {
  dispatch: Dispatch,
}

export interface GeneratorState {
  params: CardParams,
  loading: boolean,
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
    loading: false,
  };

  handleCardParamsFormChange = (fieldsValues: CardParams) => {
    this.setState({
      params: fieldsValues,
    })
  };

  handleCreateCard = (fieldValues: CardParams) => {
    const {
      dispatch,
    } = this.props;
    const {
      params,
    } = this.state;

    this.setState({
      loading: true,
    });
    html2canvas(document.getElementById('card_preview') as HTMLElement).then((canvas: HTMLCanvasElement) => {
      dispatch({
        type: 'card/add',
        payload: {
          ...params,
          base64: canvas.toDataURL('image/png'),
        },
        callback: (res: Result) => {
          this.setState({
            loading: false,
          });
          if (res.code !== 0) {
            message.error(res.msg);
            return;
          }

          router.push({
            pathname: '/card/result',
            query: {
              id: res.data.id,
            },
          });
        },
      })
      // download(canvas.toDataURL('image/png'), 'test.png', 'image/png');
    });
  };

  render () {
    const {
      params,
      loading,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <Spin spinning={loading}>
          <Row gutter={24}>
            <Col span={16}>
              <h2 className={styles.lightYellow}>卡牌参数</h2>

              <CardParamsForm
                handleFormChange={this.handleCardParamsFormChange}
                handleSubmit={this.handleCreateCard}
              />
            </Col>

            <Col span={8}>
              <h2 className={styles.lightYellow}>卡牌预览</h2>

              <CardPreview
                id={`card_preview`}
                data={params}
              />
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default connect(({ card, loading }: ConnectState) => ({
  card,
}))(Generator);
