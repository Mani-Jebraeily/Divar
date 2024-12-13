import React from 'react'

function CheackOtpForm({mobile,step,setStep,code,setCode}) {
  const submitHandeler=()=>{
    event.preventDefault()
   console.log("hello world")
  }
  return (
    <>
    <div>
      <form onSubmit={submitHandeler}>
           <p>ورود به حساب کاربری</p>
           <span>کد پیامک شده به شماره({mobile})را وارد کنید</span> 
           <label htmlFor="input">کد تایید را وارد کنید</label>
           <input type="password" id="input" maxLength={10} placeholder="کد تایید را وارد کنید" value={code} onChange={(e)=>setCode(e.target.value)}/>
           <button type="submit">ورود</button>
           <button onClick={()=>setStep(1)}>تغییر شماره موبایل</button>
      </form>
    </div>
    </>
  )
}

export default CheackOtpForm