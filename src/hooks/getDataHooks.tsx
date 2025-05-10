import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'

function useGetData<T = any>(url: string): UseQueryResult<T, Error> {
  return useQuery<T, Error>({
    queryKey: [url],
    queryFn: async (): Promise<T> => {
      const res = await axios.get<T>(url)
      return res.data
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}

export default useGetData
