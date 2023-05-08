import axios from "axios";

// This function includes some async logic,
// hence we can dispatch action manually
export const addData = () => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const response = await axios.get(
      "https://6458b9628badff578ef8e5d7.mockapi.io/api/users"
    );
    dispatch({
      type: "ADD_DATA",
      payload: response.data,
    });
  };
};

export const getData = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://6458b9628badff578ef8e5d7.mockapi.io/api/users"
    );
    dispatch({
      type: "GET_DATA",
      payload: response.data,
    });
  };
};

export const getDataById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://6458b9628badff578ef8e5d7.mockapi.io/api/users/${id}`
    );
    dispatch({
      type: "GET_DATA_BY_ID",
      payload: response.data,
    });
  };
};

export const deleteData = (ids) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `https://6458b9628badff578ef8e5d7.mockapi.io/api/users/${ids}`
    );
    dispatch({
      type: "DELETE_DATA",
      payload: response.data,
    });
  };
};

export const updateData = (id, user) => {
  return async (dispatch) => {
    const response = await axios.put(
      `https://6458b9628badff578ef8e5d7.mockapi.io/api/users/${id}`,
      user
    );
    dispatch({
      type: "UPDATE_DATA",
      payload: response.data,
    });
  };
};
