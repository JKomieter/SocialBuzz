import useSwr from "swr";
import { fetcher } from "../utils/fetcher";

export const usePosts = (userId?: string) => {
    const url = userId !== undefined ? `/api/posts/${userId}` : "/api/posts";

    const { data, error, isLoading, mutate } = useSwr(url, fetcher);
    
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
