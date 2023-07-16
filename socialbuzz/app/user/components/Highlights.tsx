const Hightlights = () => {
    return (
        <div className="flex md:w-[80%] w-full flex-row gap-6">
           <div className="flex flex-col gap-2 items-center">
                <div className='lg:h-[110px] lg:w-[110px] 
                    md:h-[70px] md:w-[70px]
                    h-[50px] w-[50px]
                bg-neutral-400 rounded-full relative'/>
                <p className="text-white font-normal text-sm">Highlights</p>
            </div>
             <div className="flex flex-col gap-2 items-center">
                <div className='lg:h-[110px] lg:w-[110px] 
                    md:h-[70px] md:w-[70px]
                    h-[50px] w-[50px]
                bg-neutral-400 rounded-full relative'/>
                <p className="text-white font-normal text-sm">New</p>
            </div>
        </div>
    )
}

export default Hightlights;