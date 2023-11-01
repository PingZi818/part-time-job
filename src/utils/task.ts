import { useHttp } from "utils/http"
import { useQuery } from "react-query"
import { ChildTask, MachineStatus, Task } from "types/task"
export const useTasks = () => {
  const client = useHttp()
  return useQuery<Task[]>(["getTakeKindList", {}], () =>
    client("getTakeKindList", { method: "POST" })
  )
}
export const useChildTasks = (id: string) => {
  const client = useHttp()
  return useQuery<Task>(["getTakeKindList", { id: id }], async () => {
    const data = await client("getTakeKindList", {
      data: { id: id },
      method: "POST",
    })
    const currentTask: Task = data?.find((item: Task) => item.id === id)
    return currentTask
  })
}
export const useMachineStatus = () => {
  const client = useHttp()
  return useQuery<MachineStatus>(["getMachineStatus", {}], () =>
    client("getMachineStatus", { method: "POST" })
  )
}
export const useChildTask = (taskId: string, businessId: string) => {
  const client = useHttp()
  return useQuery<ChildTask>(["getTakeKindList"], async () => {
    const data = await client("getTakeKindList", { method: "POST" })
    const currentTask: Task = data?.find((item: Task) => item.id === taskId)
    const currentChildTask: ChildTask =
      currentTask.businessList.find(
        (item: ChildTask) => item.businessId === businessId
      ) || ({} as ChildTask)
    return {
      ...currentChildTask,
      kindName: currentTask.kindName,
    }
  })
}
