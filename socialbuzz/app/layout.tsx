import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from './context/AuthContext'
import Create from './components/modals/PostModal/Create'
import SideBar from './components/layout/SideBar'
import Notifications from './components/modals/Notifications/Notifications'
import StoryModal from './components/modals/StoryModal/StoryModal'
import PostInfoModal from './components/modals/PostInfoModal.tsx/PostInfoModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Create />
          <Notifications />
          <PostInfoModal />
          <StoryModal />
            <div className="flex flex-row">
              <div className="h-screen fixed ">
                <SideBar />
              </div>
              <div className="md:ml-[90px] w-full">
                {children}
              </div>
            </div>
        </AuthContext>
      </body>
    </html>
  )
}