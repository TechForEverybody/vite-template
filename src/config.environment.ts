const NODE_ENVIRONMENT = process.env.NODE_ENV || 'production'
const BackendURL =
    NODE_ENVIRONMENT === 'production'
        ? 'https://backend.techforeverybody.org'
        : 'http://localhost:9000'
const FrontendURL =
    NODE_ENVIRONMENT === 'production'
        ? 'https://techforeverybody.org'
        : 'http://localhost:3000'

const MainConfigs = {
    NODE_ENVIRONMENT,
    FrontendURL,
    BackendConfigs: {
        url: BackendURL,
    },
}

export default MainConfigs
