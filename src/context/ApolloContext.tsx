import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'
import MainConfigs from '@/react.config'
import { getLocalTokenData } from '@/services/LocalStorage/LocalAuthentication'

const link = createHttpLink({
    uri: MainConfigs.BackendConfigs.url + '/graphql',
    headers: {
        authorization: `${getLocalTokenData()}`,
    },
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'all',
        },
        watchQuery: {
            errorPolicy: 'all',
        },
    },
    link: link,
})
type Props = {
    children: React.ReactNode
}

function ApolloContextProvider({ children }: Props) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloContextProvider
