import { useHttp } from "utils/http";
import { useQuery } from "react-query";
import { Task, ChildTask } from "types/task";
export const useTasks = () => {
  const client = useHttp();
  return useQuery<Task[]>(["getTakeKindList", {}], () =>
    client("getTakeKindList")
  );
};
export const useChildTasks = (id: string) => {
  const client = useHttp();
  return useQuery<ChildTask[]>(["getTakeKindList", { id: id }], async () => {
    const data = await client("getTakeKindList", { data: { id: id } });
    const childTaskList: ChildTask[] =
      data?.find((item: Task) => item.id === id)?.businessList || [];
    return childTaskList;
  });
};
