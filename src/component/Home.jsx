import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData, getDataById } from "../action/action";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const dispatch = useDispatch();
  // Selects the state value from the store.
  const todo = useSelector((state) => state.data.todo);
  console.log("todo...", todo);

  const handleAddData = () => dispatch(addData());
  const handleGetData = () => dispatch(getData());
  const handleGetDataById = () => dispatch(getDataById(id));
  const handleDeleteData = (ids) => dispatch(deleteData(ids));

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleAddData}
      >
        Add Data
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleDeleteData}
      >
        Delete Data
      </button>{" "}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleGetData}
      >
        Get Data
      </button>{" "}
      <button
        type="button"
        class="btn btn-secondary"
        onClick={handleGetDataById}
      >
        Get Data BY id
      </button>
      {todo && (
        <div className="d-flex flex-wrap">
          {todo?.map((value, index) => (
            <div className="card col col-lg-2 m-3">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <h5 className="card-title"> ID:{value.id}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDeleteData(value.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
