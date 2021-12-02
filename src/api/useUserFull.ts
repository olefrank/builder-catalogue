import useSWR from "swr";
import { FullUser } from "../models/User";
import { baseUrl } from "./constants";

export type UseUserFull = {
  user: FullUser | undefined;
  isLoading: boolean;
  error: boolean;
};

function useUserFull(id?: number | string): UseUserFull {
  // parse userId as number
  const userId = Number(id);

  // fetch user by valid userId
  const { data: userData, error: userError } = useSWR<FullUser>(
    userId ? `${baseUrl}/api/user/by-id/${userId}` : null
  );

  return {
    user: userData,
    isLoading: !userData && !userError,
    error: !!userError,
  };
}

export default useUserFull;
