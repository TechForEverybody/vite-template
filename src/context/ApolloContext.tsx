import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import MainConfigs from '@/react.config'

const client = new ApolloClient({
    uri: MainConfigs.BackendConfigs.url + '/graphql',
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
})
type Props = {
    children: React.ReactNode
}

function ApolloContextProvider({ children }: Props) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloContextProvider
