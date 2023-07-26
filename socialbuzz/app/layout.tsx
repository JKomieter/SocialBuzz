import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from './context/AuthContext'
import Create from './components/modals/PopUpModals/PostModal/Create'
import SideBar from './components/layout/SideBar'
import StoryModal from './components/modals/StoryModal/StoryModal'
import PostInfoModal from './components/modals/PopUpModals/PostInfoModal.tsx/PostInfoModal'
import TopLoading from './components/loading/TopLoading'
import TopBar from './components/layout/TopBar'
import NotificationModal from './components/modals/MotionModals/notifications/NotificationModal/NotificationsModal'
import SearchModal from './components/modals/MotionModals/notifications/SearchModal/SearchModal'

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
          <TopLoading />
          <TopBar />
          <Create />
          <NotificationModal />
          <SearchModal />
          <PostInfoModal />
          <StoryModal />
            <div className="flex flex-row md:mt-0 mt-16">
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