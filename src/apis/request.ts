import axios, { 
    AxiosError, 
    AxiosInstance, 
    AxiosResponse, 
    CreateAxiosDefaults, 
} from 'axios'

/**
 * This function responsible to intercept API request
 */

const request = () => {
    const config: CreateAxiosDefaults = { baseURL: import.meta.env.VITE_API_BASE_URL }

    const axiosInstance: AxiosInstance = axios.create(config)

    axiosInstance.interceptors.request.use(
        function (config) {
            return config
        }, 
        function (error) {
            return Promise.reject(error)
        },
    )

    axiosInstance.interceptors.response.use(
        function (response: AxiosResponse) {
            return response
        }, 
        function (error: AxiosError) {
            return Promise.reject(error)
        },
    )

    return axiosInstance
}

export default request