import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type Props = {
    message?: string
}

export default function WebsiteLoader({ message }: Props) {
    return <div style={{
        height: "100dvh",
        width: "100dvw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <div style={{
            minWidth:"max(70%,280px)"
        }}>
            <DotLottieReact
                src="https://lottie.host/554183ca-92d4-4b21-b6e1-873cc085332a/LU0iZfyZpW.lottie"
                loop
                autoplay
            />
        </div>

    </div>
}
