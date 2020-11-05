const CARD = {
  type: [
    {
      key: 'Creature',
      value: '生物',
    },
    {
      key: 'Spell',
      value: '法术',
    },
    {
      key: 'Event',
      value: '事件',
    },
    {
      key: 'Tactics',
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
