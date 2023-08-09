import useSWR from "swr"
import { fetcher } from "../utils/fetcher"


const getNotifications = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, error, mutate } = useSWR("/api/notifications", fetcher);

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default getNotifications;