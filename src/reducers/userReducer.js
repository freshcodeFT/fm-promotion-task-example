import ACTIONS from 'actions/actionTypes';

const initialState = {
  isFetching: false,
  data: {},
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_REQUEST: {
      const {
        payLoad: { userId },
      } = action;
      return { ...initialState, isFetching: true, data: { id: userId } };
    }
    case ACTIONS.GET_DATA_SUCCESS: {
      const { data } = action;
      const {
        data: { id: userId },
      } = state;
      const currentUser = data.find(user => user.id === userId);
      return { ...state, data: currentUser, isFetching: false };
    }
    case ACTIONS.GET_DATA_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }
    default: {
      throw new Error(`Action type ${action.type} is not supported`);
    }
  }
};

export default userReducer;
