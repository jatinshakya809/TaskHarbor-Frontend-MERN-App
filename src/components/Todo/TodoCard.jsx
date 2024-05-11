import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({
  title,
  body,
  id,
  delid,
  showUpdate,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="flex flex-col w-[100%] justify-between">
      <div>
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="">{body.split("", 80)}...</p>
      </div>
      <div className="flex justify-around cursor-pointer">
        <div
          onClick={() => {
            showUpdate("block");
            toBeUpdate(updateId);
          }}
          className="flex items-center px-2 py-1 rounded-lg hover:shadow-xl duration-500"
        >
          <GrDocumentUpdate className="text-xl" />
          Update
        </div>
        <div
          onClick={() => {
            delid(id);
          }}
          className="flex items-center cursor-pointer px-2 py-1 rounded-lg text-red-500 hover:shadow-xl duration-500"
        >
          <AiFillDelete className="text-xl text-red-500" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
