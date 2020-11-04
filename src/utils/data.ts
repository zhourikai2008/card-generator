const CARD = {
  type: [
    {
      key: 'creature',
      value: '生物',
    },
    {
      key: 'spell',
      value: '法术',
    },
    {
      key: 'event',
      value: '事件',
    },
    {
      key: 'tactics',
      value: '战术',
    },
  ],
  mana: new Array(10).fill(0).map((item, index) => index),
};

export {
  CARD,
};

export default {
  CARD,
};
