import { useReducer } from 'react';
import themeReducer from 'reducers/themeReducer';
import ACTIONS from 'actions/actionTypes';
import CONSTANTS from 'constants/index.js';

const initialState = {
  theme: CONSTANTS.DEFAULT_THEME,
};

export default function useTheme () {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };
  const resetTheme = () => {
    dispatch({ type: ACTIONS.RESET_THEME });
  };

  return { theme: state.theme, toggleTheme, resetTheme };
}
