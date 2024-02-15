import useSWR from 'swr'
import fetcher from "../lib/fetcher"

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher, {
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })
    return { data, error, isLoading, mutate }
}

export default useCurrentUser

//SWR => Vercel developed package
// Used for fetching data (Similar to react query)
// The first time we fetch this API current no matter
// where we use the hook
// it is not going to fetch it again
// if the data already exists