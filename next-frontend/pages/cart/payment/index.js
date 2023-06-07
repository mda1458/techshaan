import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      router.push('/login')
      }
  }, [])
  return (
    <div>Payment</div>
  )
}

export default Payment