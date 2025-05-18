const NODE_ENVIRONMENT = import.meta.env.MODE || 'production'
const environment_variables = {
    NODE_ENVIRONMENT,
    self: {
        backend: import.meta.env.KP_selfBackend_URL,
        frontend: import.meta.env.KP_selfFrontend_URL,
    },
}

export default environment_variables
