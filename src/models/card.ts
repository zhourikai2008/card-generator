import { Model } from 'dva';

const CardModel: Model =  {
  namespace: 'card',

  state: {
  },

  effects: {
    * add({payload, callback}, {select, call}) {
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
      };
    },
  },
};

export default CardModel;
