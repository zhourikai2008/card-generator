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
  mana: [
    {
      key: 'x',
      class: 'x',
    },
    ...new Array(10).fill(0).map((item, index) => {
      return {
        key: String(index),
        class: String(index),
      }
    }),
    {
      key: 'w',
      class: 'mana_w',
    },
    {
      key: 'u',
      class: 'mana_u',
    },
    {
      key: 'b',
      class: 'mana_b',
    },
    {
      key: 'r',
      class: 'mana_r',
    },
    {
      key: 'g',
      class: 'mana_g',
    },
    {
      key: 'c',
      class: 'mana_c',
    },
    {
      key: 'b/g',
      class: 'mana_bg',
    },
    {
      key: 'b/r',
      class: 'mana_br',
    },
    {
      key: 'g/u',
      class: 'mana_gu',
    },
    {
      key: 'g/w',
      class: 'mana_gw',
    },
    {
      key: 'r/g',
      class: 'mana_rg',
    },
    {
      key: 'r/w',
      class: 'mana_rw',
    },
    {
      key: 'u/b',
      class: 'mana_ub',
    },
    {
      key: 'u/r',
      class: 'mana_ur',
    },
    {
      key: 'w/b',
      class: 'mana_wb',
    },
    {
      key: 'w/u',
      class: 'mana_wu',
    },
    {
      key: 'p/b',
      class: 'mana_pb',
    },
    {
      key: 'p/c',
      class: 'mana_pc',
    },
    {
      key: 'p/g',
      class: 'mana_pg',
    },
    {
      key: 'p/r',
      class: 'mana_pr',
    },
    {
      key: 'p/u',
      class: 'mana_pu',
    },
    {
      key: 'p/w',
      class: 'mana_pw',
    },
  ]
};

export {
  CARD,
};

export default {
  CARD,
};
