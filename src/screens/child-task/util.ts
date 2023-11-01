import { useMemo } from "react"
import { useMatch } from "react-router-dom"
import { useChildTasks } from "utils/task"
export const useTaskIdInUrl = () => {
  const match = useMatch("tasks/:taskId/*")
  return match?.params.taskId || ""
}
export const useTaskInUrl = () => useChildTasks(useTaskIdInUrl())
