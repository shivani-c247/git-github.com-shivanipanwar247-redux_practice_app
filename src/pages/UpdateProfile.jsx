import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getDataById, updateData } from "../action/action";

function EditProfile() {
  const { register, handleSubmit, setValue } = useForm();
  const data = useSelector((state) => state.data.users);
  const { id } = useParams();

  const dispatch = useDispatch();
  const handleGetDataById = () => dispatch(getDataById(id));
  const handleUpdateData = (user) => dispatch(updateData(id, user));

  useEffect(() => {
    handleGetDataById();
  }, []);

  useEffect(() => {
    if (data) {
      setValue("name", data?.name);
      setValue("email", data?.email);
      setValue("contact", data?.contact);
    }
  }, [data]);
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col mt-4 col-md-8 offset-md-2">
            <h1> Update user data</h1>
            <form onSubmit={handleSubmit(handleUpdateData)}>
              <div className="mb-3">
                <label htmlFor="txtname" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="txtname"
                  {...register("name")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtname" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="txtname"
                  {...register("email")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtname" className="form-label">
                  Contact Number
                </label>
                <input
                  name="contact"
                  type="text"
                  className="form-control"
                  id="contact"
                  {...register("contact")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default EditProfile;
