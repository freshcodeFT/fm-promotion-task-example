import ACTIONS from 'actions/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  error: null,
};

const usersListReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_REQUEST: {
      return { ...initialState, isFetching: true };
    }
    case ACTIONS.GET_DATA_SUCCESS: {
      const { data } = action;
      return { ...state, data, isFetching: false };
    }
    case ACTIONS.GET_DATA_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }
    case ACTIONS.UPDATE_USER: {
      const {
        payload: { id, dribbleLink, behanceLink, email, password },
      } = action;
      return {
        data: state.data.map(user =>
          user.id !== id
            ? user
            : {
                ...user,
                dribbleLink: dribbleLink || user.dribbleLink,
                behanceLink: behanceLink || user.behanceLink,
                email: email || user.email,
                password: password || user.password,
              }
        ),
      };
    }
    default: {
      throw new Error(`Action type ${action.type} is not supported`);
    }
  }
};

export default usersListReducer;
