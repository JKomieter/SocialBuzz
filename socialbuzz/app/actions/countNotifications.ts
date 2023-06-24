import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

// check if there is still unread nptifications
const countNotifications = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading, mutate } = useSWR('/api/read', fetcher);

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default countNotifications;