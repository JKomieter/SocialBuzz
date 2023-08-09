const LoadUserMessage = () => {
    const nums = [1,2,3,4,5]

    return (
        <div className="flex-col flex gap-3">
            {
                nums.map((num) => (
                    <div key={num} className="flex flex-row items-center gap-3 ">
                        <span className="w-14 h-14 rounded-full bg-neutral-600"/>
                        <span className="h-1 w-4 rounded-xl bg-neutral-600" />
                    </div>
                ))
            }
        </div>
    )
}

export default LoadUserMessage;