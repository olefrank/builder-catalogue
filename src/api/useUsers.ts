import useSWR from "swr";
import { User } from "../models/User";

const baseUrl = "http://localhost:4000";

export type UseUsers = {
  users: User[];
  isLoading: boolean;
  error: boolean;
};

function useUsers(): UseUsers {
  const { data, error } = useSWR(`${baseUrl}/api/users`);

  return {
    users: data,
    isLoading: !data && !error,
    error: !!error,
  };
}

export default useUsers;
