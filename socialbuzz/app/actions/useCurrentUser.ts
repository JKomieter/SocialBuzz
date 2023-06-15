/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";


const useCurrentUser = () => {
    const { data, mutate } = useSWR("/api/current", fetcher);

    return {
        data,
        mutate
    }
}

export default useCurrentUser;