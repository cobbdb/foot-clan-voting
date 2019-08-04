const initialState = {
  active: false,
  facet: false,
  records: [{
    username: 'khalilah',
    class: 'warrior',
  }, {
    username: 'fatherhands',
    class: 'priest',
  }, {
    username: 'manthong',
    class: 'warrior',
  }, {
    username: 'shimmer',
    class: 'mage',
  }, {
    username: 'bertholomule',
    class: 'rogue',
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BREAKDOWN':
      return { ...state, facet: action.facet };
    case 'SELECT_TOON':
      return { ...state, active: action.username };
    case 'LOAD_TOON': {
      const records = [...state.records];
      const toon = { ...action.toon };
      const i = records.findIndex(user => user.username === toon.username);
      records[i] = toon;
      return { ...state, records };
    }
    case 'CLEAR':
      return { ...initialState, records: state.records };
    default:
      return state;
  }
};
