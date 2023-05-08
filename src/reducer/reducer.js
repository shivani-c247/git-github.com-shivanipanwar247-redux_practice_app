const { combineReducers } = require("redux");

const INITAL_STATE = {
  users: null,
};

const dataReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, users: action.payload };

    case "GET_DATA":
      return { ...state, users: action.payload };

    case "GET_DATA_BY_ID":
      return { ...state, users: action.payload };

    case "UPDATE_DATA":
      return { ...state, users: action.payload };

    case "DELETE_DATA":
      return { ...state };

    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
