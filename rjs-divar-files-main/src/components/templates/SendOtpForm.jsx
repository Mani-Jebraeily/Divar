import React from 'react'

function SendOtpForm({setStep,mobile,setMobile}) {
  const submitHandeler=()=>{
    event.preventDefault()
    if(mobile.length===11){
      setStep(2)
    }
    console.log(mobile.length)


  }
  return (
    <form onSubmit={submitHandeler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار و لطفا شماره موبایل خود را وارد کنید. کدتایید به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">
        شماره مبایل خود را وارد بکنید
      </label>
      
      <input type="text" id="input" placeholder="شماره موبایل" maxLength={11} value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      
      <button type="submit">ارسال کد تایید </button>

    </form>
  )
}

export default SendOtpForm