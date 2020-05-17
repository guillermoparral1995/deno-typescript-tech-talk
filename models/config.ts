interface Config {
    name: string,
    enabled: boolean,
    route: string,
    theme: string,
    startTime: string,
    endTime: string,
    host: string,
    site: {
        copyright: string,
        analytics: string,
    },
    seo?: object,
    deal_id: string,
    components?: object[],
    contents: ConfigContent[],
    frontendConfig?: {
        category: {
            name: string,
            permalink: string,
            id: string,
            defaultChecked: boolean
        }
    }
}

interface ConfigContent {
    type: string,
    key: string,
    startTime: string,
    endTime: string,
}

export default Config;