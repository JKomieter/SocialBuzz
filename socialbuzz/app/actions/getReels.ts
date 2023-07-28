import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

// fetch all the reels in the database from the reels route
const getReels = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading, mutate } = useSWR('/api/reels', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default getReels;

