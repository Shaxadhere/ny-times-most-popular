import { useQuery } from "@tanstack/react-query";
import { Get } from "../config/api/Get";
import { API_ROUTES } from "../config/constants/api";

export const useMostPopular = () => {
    return useQuery({
        queryKey: [API_ROUTES.MOST_POPULAR.list],
        queryFn: async () => {
            const data = await Get({
                path: API_ROUTES.MOST_POPULAR.list,
                toastError: true
            })
            return data
        },
    })
}
