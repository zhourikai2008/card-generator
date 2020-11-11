import { Model } from 'dva';
import {
  add, get
} from '@/services/card';

const cardModel: Model =  {
  namespace: 'card',

  state: {
    params: {
    },
  },

  effects: {
    * add({payload, callback}, {call}) {
      const response = yield call(add, payload);
      if (callback) callback(response);
    },

    * get({payload, callback}, {call, put}) {
      const response = yield call(get, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        params: action.payload.data || {},
      };
    },
  },
};

export default cardModel;
