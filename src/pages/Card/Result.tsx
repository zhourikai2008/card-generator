import React, {Component} from 'react';
import {
  Row,
  Col,
  Spin,
  message,
} from 'antd';
import { connect, Dispatch } from 'dva';
import router from 'umi/router';
import { ConnectState } from '@/models/connect';
import CardParamsForm, {CardParams} from '@/pages/Card/CardParamsForm';
// import { download } from '@/utils/download';
import styles from './Result.less';

export interface CardResultProps {
  dispatch: Dispatch,
}

export interface CardResultState {
  params: CardParams,
  loading: boolean,
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
    loading: false,
  };

  render () {
    const {
      params,
      loading,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <Spin spinning={loading}>
        </Spin>
      </div>
    );
  }
}

export default connect(({ card, loading }: ConnectState) => ({
  card,
}))(CardResult);
