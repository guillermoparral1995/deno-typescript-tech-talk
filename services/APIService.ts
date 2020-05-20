import fetch from 'node-fetch';
import { Config, Content } from "../models";

export default class APIService {
    private static endpointData = {
        baseURL: 'http://api.internal.ml.com/splinter/landings',
        version: 'test'
    }

    static async getConfig(key: string){
        const { baseURL, version } = APIService.endpointData;
        const response: any = await fetch(`${baseURL}/configs?url=${key}&version=${version}`);
        const data: Config = await response.json();
        return data;
    }

    static async getContent(key: string){
        const { baseURL, version } = APIService.endpointData;
        const response: any = await fetch(`${baseURL}/contents/${key}?version=${version}`);
        const data: Content = await response.json();
        return data;
    }
}