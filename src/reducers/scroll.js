
const scroll = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_SCROLL':
      return {
        ...state,
        scroll: action.scroll
      };
    default:
      return state;
  }
};

export default scroll;
