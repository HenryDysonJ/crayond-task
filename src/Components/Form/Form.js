import axios from "axios";
import React, { useState } from "react";
import { useId } from "react-id-generator";
import "./Form.css";

const Form = ({ reload = () => false }) => {
  const [data, setData] = useState({
     id:useId(),
    estimation: "",
    goal: "",
    status: "",
    title: "",
  });

  const handleChange = (key,value) => {
    setData({ ...data, [key]: value });
  };
  const handleSubmit = () => {
    axios
    .post("https://63119bae19eb631f9d7566e8.mockapi.io/api/v1/todo",data)
    .then((res) => {
      console.log(res,"navigatee")
        reload();
        setData({
          id:"",
          estimation: "",
          goal: "",
          status: "",
          title: "",
        }
        );
      })
      .catch((error) => {
        console.log("erroe==>", error);
      });
  };
  console.log(data, "check data");
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Add
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Card
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
                    onChange={(e)=>handleChange("title",e.target.value)}
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
                    onChange={(e)=>handleChange("estimation",e.target.value)}
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
                    onChange={(e)=>handleChange("goal",e.target.value)}
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
                    onChange={(e)=>handleChange("status",e.target.value)}
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
                onClick={handleSubmit}
              >
                Add save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
