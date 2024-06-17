import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notdone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Done
        </button>
        <button
          onClick={() => setFilter("notdone")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Not Done
        </button>
      </div>
      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
