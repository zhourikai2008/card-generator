import { Model } from 'dva';
import {
  add, get
} from '@/services/card';

const CardModel: Model =  {
  namespace: 'card',

  state: {
  },

  effects: {
    * add({payload, callback}, {call}) {
      const response = yield call(add, payload);
      if (callback) callback(response);
    },

    * get({payload, callback}, {call}) {
      const response = yield call(get, payload);
      if (callback) callback(response);
    },
  },

  reducers: {
  },
};

export default CardModel;
