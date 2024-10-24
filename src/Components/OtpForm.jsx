
import { InputOTP, InputOTPGroup, InputOTPItem } from 'keep-react'

export const OtpForm = () => {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPItem className='mr-6 border-[#D0FD3E]' index={0} />
        <div className="relative flex items-center">
  <InputOTPItem className="mr-6 bg-[#F6F6F666]" index={1} />
  <span className="text-[#D0FD3E] absolute left-5 top-4 font-bold text-4xl">*</span>
</div>

<div className="relative flex items-center">
  <InputOTPItem className="mr-6 bg-[#F6F6F666]" index={2} />
  <span className="text-[#D0FD3E] absolute left-5 top-4 font-bold text-4xl">*</span>
</div>
<div className="relative flex items-center">
  <InputOTPItem className="mr-6 bg-[#F6F6F666]" index={3} />
  <span className="text-[#D0FD3E] absolute left-5 top-4 font-bold text-4xl">*</span>
</div>
       
       
      </InputOTPGroup>
    </InputOTP>
  )
}
