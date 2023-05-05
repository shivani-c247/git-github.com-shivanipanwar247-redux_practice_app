const { combineReducers } = require("redux");

const INITAL_STATE = {
  todo: null,
};

const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: action.payload };

    case "GET_DATA":
      return { ...state, todo: action.payload };

    case "GET_DATA_BY_ID":
      return { ...state, todo: action.payload };

    case "DELETE_DATA":
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
