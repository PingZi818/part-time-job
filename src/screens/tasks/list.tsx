import React from "react";
import { Task } from "types/task";

interface ListProps {
  tasks: Task[];
  loading: Boolean;
}

export const List = ({ tasks, loading }: ListProps) => {
  const listItems = tasks.map((task) => (
    <div className="task-item">{task.name}</div>
  ));
  return <div className="task-box">{listItems}</div>;
};
