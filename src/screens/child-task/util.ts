import { useUrlQueryParam } from "utils/url";
import { useMemo } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { useChildTasks } from "utils/task";
export const useTaskIdInUrl = () => {
  const match = useMatch("tasks/:taskId/*");
  return match?.params.taskId || "";
};
export const useTaskInUrl = () => useChildTasks(useTaskIdInUrl());

export const useChildTasksSearchParams = () => {
  const taskId = useTaskIdInUrl();
  return useMemo(
    () => ({
      taskId,
    }),
    [taskId]
  );
};
