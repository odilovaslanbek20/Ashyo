import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetData = (url: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};

export default useGetData;
