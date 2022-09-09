import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import Form from "../Form/Form";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [todo, setTodo] = useState();
  const [edit,setEdit] = useState()
  let navigate = useNavigate();
  const getList = () => {
    axios
      .get("https://63119bae19eb631f9d7566e8.mockapi.io/api/v1/todo")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        console.log("=erroe==>", error);
      });
  };
  useEffect(() => {
    getList();
  }, []);
  const handleDel = (id) => {
    axios
      .delete(`https://63119bae19eb631f9d7566e8.mockapi.io/api/v1/todo/${id}`)
      .then((res) => {
        getList();
      })
      .catch((error) => {
        console.log("del eror", error);
      });
  };

  const handleEdit = (item) => {
    setEdit(item)
    navigate("/edit",{
      state:item
    });
  };
  return (
    <>
      <nav className="navbar navbar-light bg-primary p-4">
        <div className="container-fluid">
          <span className="title">Card</span>
          <div>
            <Form reload={getList} />
          </div>
        </div>
      </nav>
      <div className="m-2 add-btn"></div>

      <div className="col-12 p-4 ">
        <div className="row">
          {todo &&
            todo.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="card-root">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="date">
                          {moment(item.createdAt).format("MMM Do YYYY")}
                        </span>
                        <div className="over d-flex">
                          <div className="stadot">
                            <span className="star">
                              <AiFillStar fontSize={20} />
                            </span>
                            <span
                              className="dot dropdown-container"
                              tabindex="-1"
                            >
                              <span className="three-dots"></span>

                              <span className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-outline-success"
                                  onClick={(e) => handleDel(item.id)}
                                >
                                  Del
                                </button>
                                <button
                                  className="btn btn-outline-info"
                                  onClick={(e) => handleEdit(item)}
                                >
                                  Edit
                                </button>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-mid">{item.title}</div>
                      <div className=" button d-flex">
                        <button className="btn btn-outline-danger">
                          {item.estimation} Hours
                        </button>

                        <button type="button" className="btn btn-secondary">
                          {item.goal}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
