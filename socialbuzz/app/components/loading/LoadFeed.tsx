

const LoadFeed = () => {
    const feeds = [1, 2]

    const shinyOverlayStyle = {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(to right, transparent, white)',
        opacity: '0.4',
        animation: 'shiny-animation 3s linear infinite',
    };

    const keyframes = {
        '@keyframes shiny-animation': {
            '0%': {
                transform: 'translateX(-100%)',
            },
            '100%': {
                transform: 'translateX(100%)',
            },
        },
    };

    const styles = {
        shinyOverlay: shinyOverlayStyle,
        keyframes: keyframes,
    };

    return (
        <div className="md:max-w-[500px] w-full flex
        flex-col gap-11 items-center">
        {
            feeds.map((feed) => (
                <div key={feed}
                className="flex flex-col gap-3 w-full items-center">
                    <div className="flex flex-row gap-1 w-full items-center">
                        <span className="rounded-full h-12 w-12 p-[3px] border-[1px]" />
                        <p className="w-8 h-2 rounded-xl"></p>
                    </div>
                    <div style={styles.shinyOverlay as React.CSSProperties} 
                    className="w-full max-h-[500px] overflow-hidden">
                        <div className="w-full h-full inset-0 bg-gradient-to-br from-white 
                        to-transparent opacity-40 animate-shiny"></div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default LoadFeed;