import useSWR from "swr";
import { FullUser } from "../models/User";
import { baseUrl } from "./constants";

export type UseUsers = {
  users: FullUser[] | undefined;
  isLoading: boolean;
  error: boolean;
};

function useUsers(): UseUsers {
  const { data, error } = useSWR<FullUser[]>(`${baseUrl}/api/users`);

  return {
    users: data,
    isLoading: !data && !error,
    error: !!error,
  };
}

export default useUsers;
