
// loading Ui for suggested friends
const SuggestedLoading= () => {

    const top = [1];
    const bottom = [1,2,3,4]

    return (
            <div className="flex flex-col w-full items-center px-8 py-8 gap-4">
            {
                top.map((item) => (
                    <div key={item} className="flex flex-row w-full items-center gap-2">
                        <div className=" rounded-full w-12 h-12 bg-neutral-500">
                            
                        </div>
                        <span className="rounded-md w-14 h-2 bg-neutral-500">
                            
                        </span>
                    </div>
                ))
            }
                <span className="w-full mt-3 flex flex-row 
                justify-between items-center font-semibold">
                    <p className="text-neutral-500 text-sm">
                        Suggestions For You
                    </p>
                    <p className="text-neutral-100 text-sm">
                        See All
                    </p>
                </span>
                {
                    bottom.map((item) => (
                        <div key={item} className="flex flex-row w-full items-center gap-2">
                            <div className=" rounded-full w-12 h-12 bg-neutral-500">
                                
                            </div>
                            <span className="rounded-md w-14 h-2 bg-neutral-500">
                                
                            </span>
                        </div>
                    ))
                }
            </div>
    )
};


export default SuggestedLoading;