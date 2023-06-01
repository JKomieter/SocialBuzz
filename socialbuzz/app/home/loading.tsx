"use client";
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Loading() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'authenticated') {
      setLoading(false)
    }
  }, [status])

  return (
    <>
      {loading && (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500">
                
            </div>
        </div>
      )}
    </>
  )
}
