import { useHttp } from "utils/http";
import { useQuery } from "react-query";
import { DIOTakeNoSave, DROTakeNo } from "types/task";

export const useGetTakeNo = (param: DIOTakeNoSave) => {
  const client = useHttp();
  return useQuery<DROTakeNo>(["getTakeNo", param], async () =>
    client("getTakeNo", { data: param, method: "POST" })
  );
};
