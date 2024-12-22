const NODE_ENVIRONMENT = process.env.NODE_ENV || 'production'
const BackendURL =
    NODE_ENVIRONMENT === 'production'
        ? 'https://backend.techforeverybody.org'
        : 'http://localhost:7000'
const FrontendURL =
    NODE_ENVIRONMENT === 'production'
        ? 'https://techforeverybody.org'
        : 'http://localhost:4000'

const WebSocketURL =
    NODE_ENVIRONMENT === 'production'
        ? 'wss://backend.techforeverybody.org'
        : 'ws://localhost:7000'

const MainConfigs = {
    NODE_ENVIRONMENT,
    FrontendURL,
    BackendConfigs: {
        url: BackendURL,
        graphql: BackendURL + '/graphql',
        subscriptions: WebSocketURL + '/graphql',
    },
}

export default MainConfigs
