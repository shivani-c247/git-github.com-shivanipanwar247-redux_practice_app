import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

import { addData, deleteData, getData } from "../action/action";

function Home() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const dispatch = useDispatch();
  // Selects the state value from the store.
  const users = useSelector((state) => state.data.users);

  const handleAddData = () => dispatch(addData());
  const handleGetData = () => dispatch(getData());
  // const handleGetDataById = () => dispatch(getDataById(id));
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
      {/* <button
        type="button"
        className="btn btn-secondary"
        onClick={handleGetData}
      >
        Get Data
      </button>{" "} */}
      {/* <button
        type="button"
        class="btn btn-secondary"
        onClick={handleGetDataById}
      >
        Get Data BY id
      </button> */}
      <div class="input-group rounded  w-25">
        <input
          type="search"
          class="form-control rounded "
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      {users && (
        <div className="d-flex flex-wrap">
          {users?.map((value, index) => (
            <div className="card col col-lg-2 m-3">
              <img src={value.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name:-{value.name}</h5>
                <h5 className="card-title">Email:-{value.email}</h5>
                <h5 className="card-title"> ID:-{value.id}</h5>
                <h5 className="card-title"> Contact Number:-{value.contact}</h5>

                <button
                  className="btn btn-secondary m-2"
                  onClick={(e) => handleDeleteData(value.id)}
                >
                  Delete
                </button>
                <Link to={`/edit/${value.id}`} className="btn btn-secondary">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
