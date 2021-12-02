import useSWR from "swr";
import { FullUser } from "../models/User";
import { baseUrl } from "./constants";

export type UseUserFull = {
  user: FullUser | undefined;
  isLoading: boolean;
  error: boolean;
};

function useUserFull(userId: number): UseUserFull {
  const { data: userData, error: userError } = useSWR<FullUser>(
    `${baseUrl}/api/user/by-id/${userId}`
  );

  return {
    user: userData,
    isLoading: !userData && !userError,
    error: !!userError,
  };
}

export default useUserFull;
