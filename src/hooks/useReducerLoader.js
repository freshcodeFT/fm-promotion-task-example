import { useReducer, useEffect } from 'react';
import ACTIONS from 'actions/actionTypes';

const defaultInitialState = {
  isFetching: false,
  data: [],
  error: null,
};

export default function useReducerLoader (
  reducer,
  options = { payLoad: {}, link: null },
  initialState = defaultInitialState
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: ACTIONS.GET_DATA_REQUEST,
      payLoad: options.payLoad,
    });
    fetch(options.link)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ACTIONS.GET_DATA_SUCCESS,
          data,
        })
      )
      .catch(error =>
        dispatch({
          type: ACTIONS.GET_DATA_ERROR,
          error,
        })
      );
  }, [options.link]);

  return [state, dispatch];
}
