import useSWR from "swr";
import { SummaryUser } from "../models/User";
import { baseUrl } from "./constants";

export type UseUserSummary = {
  user: SummaryUser | undefined;
  isLoading: boolean;
  error: boolean;
};

function useUserSummary(username: string): UseUserSummary {
  const { data, error } = useSWR<SummaryUser>(
    `${baseUrl}/api/user-by-username/${username}`
  );

  return {
    user: data,
    isLoading: !data && !error,
    error: !!error,
  };
}

export default useUserSummary;
