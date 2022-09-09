import axios from "axios";
import React, { useState } from "react";
import "../Form/Form.css";
import { useLocation, useNavigate } from "react-router-dom";

const EditForm = () => {
  let location = useLocation();
  let item =location.state
  let navigate = useNavigate();
  const [data, setData] = useState({
    estimation: item.estimation,
    goal: item.goal,
    status: item.status,
    title: item.title,
  });
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleSubmit = (item) => {
    axios
      .put(`https://63119bae19eb631f9d7566e8.mockapi.io/api/v1/todo/${item}`,data)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("edit====error", error);
      });
    navigate("/")
  };
  console.log(data, "check data");
  return (
    <div className="cards">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update detaile
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data?.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">
                  Estimation
                </label>
                <input
                  type="numer"
                  className="form-control"
                  value={data?.estimation}
                  onChange={(e) => handleChange("estimation", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">
                  Goal
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data?.goal}
                  onChange={(e) => handleChange("goal", e.target.value)}
                />
              </div>{" "}
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data?.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                />
              </div>{" "}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={(e) => handleSubmit()}
            >
              Add save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
