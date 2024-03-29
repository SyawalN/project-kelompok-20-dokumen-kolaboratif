"use client"

import { useEffect } from "react"
import withAuth from "./(utils)/withAuth"
import { useRouter } from "next/navigation"

const Loading = () => {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/login')
  }, [])

  return (
    <main className="flexful-centered" style={{fontFamily: "Cambria", letterSpacing: "2px", backgroundColor: "black", color: "white" , height: "100%"}}>
      <div className="flexful-centered">
        <h1>Loading...</h1>
      </div>
    </main>
  )
}

export default withAuth(Loading)