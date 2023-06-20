"use client"
import Feed from "./Feed"
import Suggestions from "./Suggestions"
import Header from "./layout/Header"


const CenterPage = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col w-full md:basis-2/3">
                <Header />
                <Feed />
            </div>
            <div className="flex-col hidden md:flex w-full md:basis-1/3">
                <Suggestions />
            </div>
        </div>
    )
}

export default CenterPage;