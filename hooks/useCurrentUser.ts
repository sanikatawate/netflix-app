// "use client"
import useSWR from 'swr'
import fetcher from "../lib/fetcher"

const useCurrentUser = () => {
    const { data, error, isLoading } = useSWR('/api/current', fetcher)
    return { data, error, isLoading }
}

export default useCurrentUser

//SWR => Vercel developed package
// Used for fetching data (Similar to react query)
// The first time we fetch this API current no matter
// where we use the hook
// it is not going to fetch it again
// if the data already exists