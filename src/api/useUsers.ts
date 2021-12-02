import useSWR from "swr";
import { User } from "../models/User";
import { baseUrl } from "./constants";

export type UseUsers = {
  users: User[] | undefined;
  isLoading: boolean;
  error: boolean;
};

function useUsers(): UseUsers {
  const { data, error } = useSWR<User[]>(`${baseUrl}/api/users`);

  return {
    users: data,
    isLoading: !data && !error,
    error: !!error,
  };
}

export default useUsers;
