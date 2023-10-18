import { useMatch } from "react-router-dom";
import { useChildTask } from "utils/task";
export const useParamInUrl = () => {
  const match = useMatch("tasks/:taskId/step/:businessId/*");
  return (
    match?.params || {
      taskId: "",
      businessId: "",
    }
  );
};
export const useChildTaskInUrl = () =>
  useChildTask(useParamInUrl().taskId || "", useParamInUrl().businessId || "");
