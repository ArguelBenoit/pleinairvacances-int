
const viewport = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_VIEWPORT':
      return {
        ...state,
        viewport: [action.width, action.height]
      };
    default:
      return state;
  }
};

export default viewport;
