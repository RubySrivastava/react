import { apiFetch } from "./index"


export type ResponseHostItem = {
    id: string,
    name: string,
    description: string
}
export type ResponseHosts = {
    data: Array<ResponseHostItem>
}
export const getHosts = () => {
    const url = `/hosts`
    return apiFetch<ResponseHosts>(url)
}

