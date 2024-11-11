'use client'
import ContactComponent from "@/components/ContactComponent"
import Spinner from "@/components/Spinner/Spinner"
import { useEffect, useState } from "react"


const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <>
      {isLoading ? (
        <ContactComponent />
      ) : (
        <Spinner />
      )
      }
    </>
  )
}

export default Contact