import loginImg from '../../assets/Images/loginpic.png'
import Form from '../../Components/Form/Form';

const Login = () => {
    return (
        <div className="max-w-7xl overflow-hidden h-[1024px] bg-[#1A1D26] mx-auto">
            <div className="flex">
                <div className="w-full border">
                 <Form></Form>
                </div>
                <div className="w-full relative">
                       <img className='w-full' src={loginImg} alt="" />
                       <div className='absolute inset-0 w-full bg-[#0000008F]'>
                          <div className='absolute bottom-0 left-0 right-0 p-6 flex justify-center'>
                          <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2334 40L0.172241 40L0.172243 17.7926L9.01886 -1.15205e-06L20.0162 -1.93297e-07L11.2139 17.7926L22.2334 17.7926L22.2334 40Z" fill="#F8F8F8"/>
<path d="M53.3195 40L31.2583 40L31.2583 17.7926L40.105 -1.15205e-06L51.1023 -1.93297e-07L42.3 17.7926L53.3195 17.7926L53.3195 40Z" fill="#F8F8F8"/>
</svg>
<p className='text-2xl py-6 text-white leading-relaxed w-[350px] text-center'>Find reliable and highly rated babysitters that fit your schedule effortlessly. </p>
                          </div>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Login;