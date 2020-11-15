import React, {Component} from 'react';
import {
  Row,
  Col,
  Spin,
  message,
  Button,
  Form,
} from 'antd';
import { connect, Dispatch } from 'dva';
import router from 'umi/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ConnectState } from '@/models/connect';
import {CardParams} from '@/pages/Card/CardParamsForm';
import styles from './Result.less';

const {Item: FormItem} = Form;

export interface CardResultProps {
  dispatch: Dispatch,
  card: {
    params: CardParams,
  }
  loading?: boolean,
  location: {
    query: {
      id: string
    },
  },
}

export interface CardResultState {
}

class CardResult extends Component<CardResultProps, CardResultState> {
  state = {
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

    const x = new XMLHttpRequest();
    x.open('GET', srcImg, true);
    x.responseType = 'blob';
    x.onload = function (e) {
      download(x.response, `${id}.png`, 'image/png' );
    };
    x.send();
  }

  render () {
    const {
      card: { params },
      loading,
      location: {
        query: {
          id,
        },
      },
    } = this.props;
    const {
    } = this.state;

    const srcImg = `/image/${id}.png`;
    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 17 },
    };
    const labelDom = (text: string) => (
      <label style={{ color: '#FFF' }}>{text}</label>
    );

    return (
      <div className={styles.wrapper}>
        <Button onClick={() => router.push('/card/generator')} type="primary">返回</Button>
        <Spin spinning={loading}>
          <h1 className={styles.lightYellow} style={{ textAlign: 'center' }}>卡牌生成结果</h1>

          <Row gutter={24}>
            <Col span={9} className={styles.imgBox}>
              <h2 className={styles.lightYellow}>卡牌图片</h2>

              <img alt={srcImg} src={srcImg} />

              <Button onClick={() => this.handleDownload(srcImg)} type="primary" className={styles.btn}>下载图片</Button>
            </Col>

            <Col span={15} className={styles.paramsBox}>
              <h2 className={styles.lightYellow}>卡牌参数</h2>

              <FormItem {...layout} label={labelDom('标题')}>
                {labelDom(params.title)}
              </FormItem>

              <FormItem {...layout} label={labelDom('类型')}>
                {labelDom(params.type)}
              </FormItem>

              {params.subtype ? (
                <FormItem {...layout} label={labelDom('子类型')}>
                  {labelDom(params.subtype)}
                </FormItem>
              ) : null}

              {params.strength ? (
                <FormItem {...layout} label={labelDom('强度')}>
                  {labelDom(String(params.strength))}
                </FormItem>
              ) : null}

              <FormItem {...layout} label={labelDom('费用')}>
                {labelDom(params.mana)}
              </FormItem>

              <FormItem {...layout} label={labelDom('文本')}>
                <pre className={styles.textArea}>
                  {labelDom(params.description)}
                </pre>
              </FormItem>

              <div className={styles.btnBox}>
                <CopyToClipboard
                  text={JSON.stringify(params)}
                  onCopy={() => message.success('复制成功！')}>
                  <Button type="primary" className={styles.btn}>复制参数</Button>
                </CopyToClipboard>
              </div>
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
