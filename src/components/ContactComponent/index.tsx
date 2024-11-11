import Link from "next/link"
import InputComponent from "../InputComponent"
import Typography from "../Typography"
import { useState } from "react"
import { ChangeEvent } from "react"

const ContactComponent = () => {

  const [name, setName] = useState<string>("")
  const [companyName, setCompanyName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [website, setWebsite] = useState<string>("")

  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  const sendInfo = () => {
    if (name === "") setNameError(true)
    else setNameError(false)
    if (email === "") setEmailError(true)
    else setEmailError(false)

  }

  return (

    <>
      <div className="flex bg-sky-900">
        <div className="flex flex-col h-[100vh] w-full justify-center px-20 gap-5">
          <div className="flex justify-between w-full items-center">
            <Typography size="h2">{process.env.NEXT_PUBLIC_TEAM_NAME}</Typography>
            <Link className="outline-4 outline-white px-4 py-1 hover:text-rose-600 " href="/">Home</Link >
          </div>
          <Typography className="font-normal" size="h3">Get an estimate</Typography>
          <Typography size="paragraph" className="w-1/2">Do you already have specific requirements for your solution? Wondering how much it will cost to develop? Fill out this form and we will get back to you with a rough estimate.</Typography>
          <div className="flex justify-between w-full gap-10">
            <div className="flex flex-col">
              <InputComponent type="text" className="" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
              {nameError === true ?
                (<Typography className="text-rose-600 italic">Name is required</Typography>) : (<></>)
              }
            </div>
            <InputComponent type="text" className="" label="Company (optional)" value={companyName} onChange={e => setCompanyName(e.target.value)} />
          </div>
          <div className="flex justify-between w-full gap-10">
            <div className="flex flex-col">
              <InputComponent type="email" className="" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
              {emailError === true ? (
                <Typography className="text-rose-600 italic">Email is required</Typography>
              ) : (<></>)}
            </div>
            <InputComponent type="text" className="" label="Phone Number(optional)" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <InputComponent className="" label="Company Website(if already exist)" />
          </div>
          <button onClick={sendInfo}>
            <Typography size="subtitle-25" className="outline-2 outline-white">Send</Typography>
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactComponent