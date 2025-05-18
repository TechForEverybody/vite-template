import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LocationContextLoading() {
    return (
        <div
            style={{
                height: '100dvh',
                width: '100dvw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: 'min(80%,780px)',
                }}
            >
                <DotLottieReact
                    src="/animations/Location_Animation.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    )
}
