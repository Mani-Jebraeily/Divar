import React from 'react'
import { useState } from 'react'
import SendOtpForm from '../components/templates/SendOtpForm'
import CheackOtpForm from '../components/templates/CheackOtpForm'

function AuthPage() {
    const [step,setStep]=useState(1);
    const [mobile,setMobile]=useState("")
    const [code,setCode]=useState("")
  return (
    <>
    {step===1&&<SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile}/>}
    {step===2&&<CheackOtpForm setStep={setStep} mobile={mobile} code={code} setCode={setCode}/>}
    </>
  )
}

export default AuthPage