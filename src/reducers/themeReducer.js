import ACTIONS from 'actions/actionTypes';
import CONSTANTS from 'constants/index.js';
const { THEMES, DEFAULT_THEME } = CONSTANTS;

const initialState = {
  theme: DEFAULT_THEME,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME: {
      return {
        theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
      };
    }
    case ACTIONS.RESET_THEME: {
      return { ...initialState };
    }
    default: {
      throw new Error(`Action type ${action.type} is not supported`);
    }
  }
};

export default themeReducer;
