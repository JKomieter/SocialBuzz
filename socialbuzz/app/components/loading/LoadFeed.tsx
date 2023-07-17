

const LoadFeed = () => {
    const feeds = [1, 2]


    return (
        <div className="w-full h-full px-12 py-5 flex justify-center">
            <div className="md:max-w-[500px] w-full flex
            flex-col gap-11 items-center">
        {
            feeds.map((feed) => (
                <div key={feed}
                className="flex flex-col gap-3 w-full items-center">
                    <div className="flex flex-row gap-1 w-full items-center">
                        <span className="rounded-full h-12 w-12 bg-neutral-800" />
                        <p className="w-8 h-2 rounded-xl bg-neutral-800"></p>
                    </div>
                    <div className="w-full h-[250px] md:h-[500px] bg-neutral-800 rounded-xl">
                        
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    )
}

export default LoadFeed;