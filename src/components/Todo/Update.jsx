import React, { useEffect, useState } from "react";
import "./Todo.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ showUpdate, update }) => {
  let id = sessionStorage.getItem("id");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setTitle(update.title);
    setBody(update.body);
  }, [update.title, update.body]);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeBody = (e) => {
    setBody(e.target.value);
  };

  const submit = async (e) => {
    try {
      if (body === "" || title === "") {
        return toast.error("Title and Body should not be empty");
      }
      const Taskid = update._id;

      const res = await axios.put(
        `http://localhost:3000/api/v1/list/updatetask/${Taskid}`,
        { title: title, body: body, id: id }
      );

      toast.success(res.data.message);
      setTimeout(() => {
        showUpdate("none");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log("update api me error", error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <ToastContainer />
      <h3 className="text-2xl">Update Your Task</h3>
      <div className="flex flex-col md:w-[50%]">
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleOnChangeTitle}
          className="todoInput updateInput my-4 w-50 p-3 outline-none border-none"
        />
        <textarea
          name="body"
          value={body}
          onChange={handleOnChangeBody}
          className="todoInput updateInput w-50 p-3 outline-none border-none"
        />
      </div>

      <div className="my-5 space-x-5">
        <button
          onClick={submit}
          className="bg-[#00a676] text-white rounded-sm font-bold px-3 py-2 cursor-pointer hover:bg-[#00d599] hover:rounded-tr-xl hover:rounded-bl-xl duration-500"
        >
          UPDATE
        </button>
        <button
          onClick={() => {
            showUpdate("none");
          }}
          className="bg-[#e30022] text-white rounded-sm font-bold px-3 py-2 cursor-pointer hover:bg-[#ff0026] hover:rounded-tr-xl hover:rounded-bl-xl  duration-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
