import useSWR from "swr";
import { Set } from "../models/Set";
import { baseUrl } from "./constants";

export type UseSets = {
  sets: Set[] | undefined;
  isLoading: boolean;
  error: boolean;
};

function useSets(): UseSets {
  const { data, error } = useSWR<Set[]>(`${baseUrl}/api/sets`);

  return {
    sets: data,
    isLoading: !data && !error,
    error: !!error,
  };
}

export default useSets;
