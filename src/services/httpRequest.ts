import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { METHOD } from '../enums/methods';

export class HttpRequest {
    private readonly axiosInstance: AxiosInstance;
    private readonly axiosAbort: AbortController;

    constructor(baseURL: string, timeout: number = 5000){
        this.axiosInstance = axios.create({ baseURL, timeout });
        this.axiosAbort = new AbortController();
    }

    private async request<T>( method: METHOD,{ endpoint, params }: { endpoint: string, params?: AxiosRequestConfig }): Promise<T>{
        const config: AxiosRequestConfig = { ...params };
        config.signal =  this.axiosAbort.signal;
        const  response =  await this.axiosInstance[method]<T>(endpoint,config);
        return response.data;
    }

    async get<T>(endpoint: string, params?: AxiosRequestConfig): Promise<T>{
        return await this.request(METHOD.GET, { endpoint, params });
    }

}

