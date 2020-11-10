import React, {Component} from 'react';
import {
  Row,
  Col,
  Spin,
  message,
  Button,
} from 'antd';
import { connect, Dispatch } from 'dva';
import router from 'umi/router';
import { ConnectState, Loading } from '@/models/connect';
import CardParamsForm, {CardParams} from '@/pages/Card/CardParamsForm';
import styles from './Result.less';

export interface CardResultProps {
  dispatch: Dispatch,
  location: {
    query: {
      id: string
    },
  },
  loading?: boolean,
}

export interface CardResultState {
  params: CardParams,
}

class CardResult extends Component<CardResultProps, CardResultState> {
  state = {
    params: {
      title: '',
      type: '',
      subtype: '',
      mana: '',
      description: '',
    },
  };

  componentDidMount() {
    this.cardInit();
  }

  cardInit = () => {
    const {
      dispatch,
      location: {
        query: {
          id,
        },
      },
    } = this.props;

    dispatch({
      type: 'card/get',
      payload: {
        id,
      }
    })
  }

  handleDownload = (srcImg: string) => {
    const {
      location: {
        query: {
          id,
        },
      },
    } = this.props;

    download(`${location.origin}${srcImg}`, `${id}.png`);
  }

  render () {
    const {
      loading,
      location: {
        query: {
          id,
        },
      },
    } = this.props;
    console.log(this.props)
    const {
      // params,
    } = this.state;

    const srcImg = `/image/${id}.png`;
    return (
      <div className={styles.wrapper}>
        <Spin spinning={loading}>
          <h1 className={styles.lightYellow} style={{ textAlign: 'center' }}>卡牌生成结果</h1>

          <Row gutter={24}>
            <Col span={9}>
              <h2 className={styles.lightYellow}>卡牌图片</h2>
              <img alt={srcImg} src={srcImg} />
              <div>
                <Button onClick={() => this.handleDownload(srcImg)} type="primary">下载图片</Button>
              </div>
            </Col>

            <Col span={15}>
              <h2 className={styles.lightYellow}>卡牌参数</h2>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default connect(({ card, loading }: ConnectState) => ({
  card,
  loading: loading.models.card,
}))(CardResult);
