import axios from "axios";

// This function includes some async logic,
// hence we can dispatch action manually
export const addData = () => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    dispatch({
      type: "ADD_DATA",
      payload: response.data,
    });
  };
};

export const getData = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: "GET_DATA",
      payload: response.data,
    });
  };
};

export const getDataById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?id=${id}`
    );
    dispatch({
      type: "GET_DATA_BY_ID",
      payload: response.data,
    });
  };
};

export const deleteData = (ids) => {
  console.log("id12532147263594i.", ids);
  return async (dispatch) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/id=${ids}`
    );
    console.log("response", response);
    dispatch({
      type: "DELETE_DATA",
      payload: response.data,
    });
  };
};
