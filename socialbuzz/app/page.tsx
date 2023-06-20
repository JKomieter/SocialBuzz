import Image from 'next/image'
import Footer from './components/layout/Footer'
import SideBar from './components/layout/SideBar'
import CenterPage from './components/CenterPage'

export default function Home() {
  return (
    <main className='flex flex-col h-full w-full'>
        <CenterPage />
        <Footer />
    </main>
  )
}

