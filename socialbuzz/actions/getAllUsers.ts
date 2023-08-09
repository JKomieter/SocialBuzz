import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';


const getAllUsers = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, mutate, isLoading } = useSWR('/api/users', fetcher);

  return {
    data,
    mutate,
    isLoading
  }
}

export default getAllUsers;