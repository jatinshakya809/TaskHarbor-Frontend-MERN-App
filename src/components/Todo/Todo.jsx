import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../BaseUrl";

const Todo = () => {
  // let toUpdateArray = [];

  let id = sessionStorage.getItem("id");
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const [Array, setArray] = useState([]);
  const [toUpdateArray, setToUpdateArray] = useState([]);

  const show = () => {
    const textArea = (document.getElementById("textArea").style.display =
      "Block");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (data.body === "" || data.title === "") {
      toast.error("Title and Body should not be empty");
    } else {
      if (id) {
        try {
          const res = await axios.post(`${baseUrl}/api/v1/list/addtask`, {
            title: data.title,
            body: data.body,
            id: id,
          });
          setData({ title: "", body: "" });
          toast.success("Your task is Added");

          window.location.reload();
        } catch (error) {
          console.log("Error in addTask", error);
          toast.error("Your task is Not saved! Please SignUp");
        }
      } else {
        setArray([...Array, data]);
        setData({ title: "", body: "" });
        toast.success("Your task is Added");
        toast.error("Your task is Not saved! Please SignUp");
      }
    }
  };
  const del = async (cardId) => {
    if (id) {
      try {
        const res = await axios.delete(
          `${baseUrl}/api/v1/list/deleteTask/${cardId}`,
          { data: { id: id } }
        );
        window.location.reload();
      } catch (error) {
        console.log("Error in Delete Task", error);
        toast.error("Your task is Not Delete! try Again");
      }
    } else {
      toast.error("Please Signup");
    }
  };
  const showUpdate = (value) => {
    document.getElementById("todoUpdate").style.display = value;
  };

  const update = (value) => {
    setToUpdateArray(Array[value]);
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}/api/v1/list/getAllTask/${id}`
          );
          setArray(res.data.list);
        } catch (error) {}
      };
      fetch();
    }
  }, [id]);

  return (
    <>
      <div className="md:px-20 px-5 min-h-[100vh] py-10 flex flex-col  md:items-center">
        <ToastContainer />
        <div className="md:w-[50vw] ">
          <div className="flex flex-col justify-center items-center shadowInput rounded-lg">
            <input
              type="text"
              placeholder="TITLE"
              name="title"
              className="outline-none rounded-lg w-[100%] md:w-[50vw]  text-lg md:px-4 px-3 py-2 "
              onClick={show}
              onChange={handleChange}
              value={data?.title}
            />
            <textarea
              type="text"
              id="textArea"
              placeholder="BODY"
              name="body"
              className="outline-none rounded-lg w-[100%] md:w-[50vw]  text-lg  md:px-4 px-3 py-2 "
              onChange={handleChange}
              value={data?.body}
            />
          </div>
          <div className="flex justify-end items-center m-4">
            <button
              className="bg-[#E30022] px-5 py-2 text-xl   text-white rounded-sm font-bold cursor-pointer hover:bg-[#ff0026] rounded-tr-xl rounded-bl-xl  duration-500"
              onClick={submit}
            >
              Add
            </button>
          </div>
        </div>

        <div className="md:flex flex-wrap md:flex-row md:gap-8 md:mt-10 mt-5 md:justify-center md:px-0 px-4 md:space-y-0 space-y-5">
          {Array &&
            Array.map((item, index) => (
              <div
                className="border border-black rounded-xl py-3 px-2 w-[300px] md:w-[250px] flex justify-between min-h-[150px]"
                key={index}
              >
                <TodoCard
                  title={item.title}
                  body={item.body}
                  id={item._id}
                  delid={del}
                  showUpdate={showUpdate}
                  updateId={index}
                  toBeUpdate={update}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="todoUpdate" id="todoUpdate">
        <div className="container update">
          <Update showUpdate={showUpdate} update={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;
