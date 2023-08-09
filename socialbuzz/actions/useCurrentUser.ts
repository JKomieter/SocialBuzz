/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";


const useCurrentUser = () => {
    const { data, mutate, isLoading } = useSWR("/api/current", fetcher);

    return {
        data,
        mutate,
        isLoading,
    }
}

export default useCurrentUser;