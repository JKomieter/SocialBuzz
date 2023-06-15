import Image from 'next/image'
import Footer from './components/layout/Footer'
import SideBar from './components/layout/SideBar'
import CenterPage from './components/CenterPage'

export default function Home() {
  return (
    <main className='text-white'>
      <div className="flex flex-row w-screen h-screen">
          <div className="max-w-[90px] min-w-[0] 
          flex-col basis-2/9 h-full hidden md:flex overflow-y-hidden">
            <SideBar />
          </div>
          <div className="flex flex-col basis-7/9 h-full w-full">
            <CenterPage />
            <Footer />
          </div>
      </div>
    </main>
  )
}

