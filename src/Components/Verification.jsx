import { Link } from 'react-router-dom';
import logo from '../assets/Images/logologin.png'
import { OtpForm } from './OtpForm';

const VerificationForm
 = () => {
    return (
        <div className="w-full h-full rounded bg-transparent  p-5 sm:p-8 drop-shadow-lg ">
        <div className='w-full flex flex-col justify-center items-center'>
            <img className='w-80 h-52' src={logo} alt="" />
            <p className='text-4xl text-white font-bold mb-4'>Verification Code</p>
            <p className='text-gray-300 text-center text-lg'>We have sent you a verification code on your give email address and phone number  +92*********</p>
            <div className='my-8'>
                <OtpForm></OtpForm>
                <p className='text-[#D0FD3E] my-3 flex justify-end'>Resend Code?</p>
            </div>
        </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-[#D0FD3E] py-2'>Change Phone Number or Email Address</p>
     <Link to='/dashboard'> <button className="rounded-xl w-96  font-bold text-lg px-5 py-4 my-4 ring-1 ring-zinc-400 bg-[#D0FD3E]">Confirm</button></Link>
      </div>
       
        <p className='justify-center h-64 text-lg text-gray-400 flex items-end'>© 2023 Andrews | All rights reserved</p>
        
    </div>
    );
};

export default VerificationForm
;