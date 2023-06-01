import Image from 'next/image'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Header from './components/Header'

export default function Home() {
  return (
    <main className='text-white'>
      <div className="flex flex-row w-screen h-screen">
          <div className="max-w-[90px] min-w-[0]
          flex-col basis-2/9 h-full hidden md:flex">
            <SideBar />
          </div>
          <div className="flex flex-col basis-7/9 h-full w-full">
            <Header />
              Posts
            <Footer />
          </div>
      </div>
    </main>
  )
}
