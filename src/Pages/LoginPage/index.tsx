import { useAuth } from "@/Context/AuthProvider";
import Loginimg from "@/assets/images/login_poster.svg"
import Registerimg from "@/assets/images/register_poster.svg"
import arrowRight from "@/assets/icons/arrow-right.svg"
import arrowLeft from "@/assets/icons/arrow-left.svg"
import logo from "@/../public/logo.svg"
import { Input } from "@/components/common/ui/input";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useState } from "react";


function Register({setLoginView}:any) {
    const {setAuth} = useAuth()
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-[#F5F5F5] w-[689px] h-[599px] px-5 pt-2 border-[#00000037] border rounded-lg relative">
            <img className="absolute -right-48 top-10 -z-10"  width={285} height={435} src={Registerimg} alt="" />
            <div className="flex justify-start items-center space-x-2">
                <img src={arrowLeft} alt="" width={18} height={18} />
                <div onClick={()=>{setLoginView(true)}} className="cursor-pointer">
                    <p className="text-[16px] font-semibold">Login</p> 
                    <p className="h-[1px] w-[22px] bg-[#1B78BA]"></p>
                </div>
            </div>
            <div  className="flex justify-center flex-col items-center mt-10 px-24">
                <img width={85} height={85} src={logo} alt=""  />
                <h1 className="text-[30px] font-bold mt-5">Golu Space</h1>
                <p className="text=[#717171] text-sm">One Stop Solution For All Your School Needs </p>
                <Input type="email" placeholder="Email" className="dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-10" />
                <Input type="password" placeholder="Password" className="dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-5" />
                <Input type="password" placeholder="Confirm Password" className="dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-5" />
                <PrimaryButton onClick={()=>{setAuth("logged in")}} text="Register" className="mt-10 w-full rounded-full"/>
            </div>
        </div>
    </div>
  )
}

function Login({setLoginView}:any) {
    const {setAuth} = useAuth()
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-[#F5F5F5] w-[689px] h-[599px] px-5 pt-2 border-[#00000037] border rounded-lg relative">
            <img className="absolute -left-48 top-10 -z-10"  width={285} height={435} src={Loginimg} alt="" />
            <div className="flex justify-end items-center space-x-2">
                <div onClick={()=>{setLoginView(false)}} className="cursor-pointer">
                    <p className="text-[16px] font-semibold">Register</p> 
                    <p className="h-[1px] w-[52px] bg-[#1B78BA]"></p>
                </div>
                <img src={arrowRight} alt="" width={18} height={18} />
            </div>
            <div  className="flex justify-center flex-col items-center mt-10 px-24">
                <img width={85} height={85} src={logo} alt=""  />
                <h1 className="text-[30px] font-bold mt-5">Golu Space</h1>
                <p className="text=[#717171] text-sm">One Stop Solution For All Your School Needs </p>
                <Input type="email" placeholder="Email" className="dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-10" />
                <Input type="password" placeholder="Password" className="dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-5" />
                <PrimaryButton onClick={()=>{setAuth("logged in")}} text="Login" className="mt-10 w-full rounded-full"/>
            </div>
        </div>
    </div>
  )
}

function LoginPage() {
    const [loginView, setLoginView] = useState(true)
  return (
    <>
    {
        loginView ? <Login setLoginView={setLoginView}/> : <Register setLoginView={setLoginView}/>
    }
    </>
  )
}

export default LoginPage;