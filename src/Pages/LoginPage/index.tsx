import { useAuth } from "@/Context/AuthProvider";
import Loginimg from "@/assets/images/login_poster.svg"
import Registerimg from "@/assets/images/register_poster.svg"
import arrowRight from "@/assets/icons/arrow-right.svg"
import arrowLeft from "@/assets/icons/arrow-left.svg"
import logo from "@/../public/logo.svg"
import { Input } from "@/components/common/ui/input";
import Button from "@/components/common/Button";
import { useState } from "react";
import Checkbox from "@/components/common/CheckBox";
import Text from "@/components/common/Text";
import GoogleLogo from "@/assets/images/Google_Logo.svg"


function GoogleLogIn() {
  return (
    <div className="flex justify-start items-center space-x-5 bg-blue-login rounded-iphone mt-10 text-white pl-2 pr-10 py-1 cursor-pointer">
        <div className="p-1 bg-white rounded-full">
        <img src={GoogleLogo} alt="" />
        </div>
        <Text className="text-fs-15 font-Montserrat" as="p">Sign in with Google</Text>
    </div>
  )
}


function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
        <img width={85} height={85} src={logo} alt=""  />
        <h1 className="text-[30px] font-bold mt-3 font-Montaga">Squad</h1>
        <p className="text-[#717171] text-sm font-semibold font-Montserrat">One Stop Solution For All Your School Needs </p>
    </div>
  )
}


function Register({setLoginView}:any) {
    const {setAuth} = useAuth()
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-gray1 w-[689px] min-h-[599px] px-5 py-2 pb-17.5 border-gray2 border rounded-lg relative">
            <img className="absolute -right-48 top-10 -z-10"  width={285} height={435} src={Registerimg} alt="" />
            <div className="flex justify-start items-center space-x-2">
                <img src={arrowLeft} alt="" width={18} height={18} />
                <div onClick={()=>{setLoginView(true)}} className="cursor-pointer font-Montserrat">
                    <p className="text-[16px] font-semibold">Login</p> 
                    <p className="h-[1px] w-[22px] bg-blue-login"></p>
                </div>
            </div>
            <div  className="flex justify-center flex-col items-center mt-10 px-24">
                <Header/>
                <form className="w-full mt-10" onSubmit={(e)=>{e.preventDefault();setAuth("logged in")}}>
                    <div className="flex justify-between items-center space-x-5 ">
                    <Input type="text" placeholder="First Name" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
                    <Input type="text" placeholder="Last Name" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
                    </div>
                    <Input type="email" placeholder="Email" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5" />
                    <Input type="password" placeholder="Password" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5" />
                    <Input type="password" placeholder="Re-Password" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5" />
                    <div className="mt-5 flex justify-between items-center">
                        <Checkbox label="Terms Of Use" boxClasses="border-[##B7B7B7] dark:border-[##B7B7B7]" labelClasses="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat"/>
                    </div>
                    <Button onClick={()=>{setAuth("logged in")}} text="Register" className="mt-10 w-full  bg-blue-login rounded-iphone text-fs-15 font-normal text-white"/>
                </form>
                <GoogleLogIn/>
            </div>
        </div>
    </div>
  )
}

function Login({setLoginView}:any) {
    const {setAuth} = useAuth()
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-gray1 w-[689px] min-h-[599px] px-5 py-2 pb-17.5 border-gray2 border rounded-lg relative">
            <img className="absolute -left-48 top-10 -z-10"  width={285} height={435} src={Loginimg} alt="" />
            <div className="flex justify-end items-center space-x-2">
                <div onClick={()=>{setLoginView(false)}} className="cursor-pointer font-Montserrat">
                    <p className="text-[16px] font-semibold">Register</p> 
                    <p className="h-[1px] w-[52px]  bg-blue-login"></p>
                </div>
                <img src={arrowRight} alt="" width={18} height={18} />
            </div>
            <div  className="flex justify-center flex-col items-center mt-8 px-24">
                <Header/>
                <form className="w-full mt-10" onSubmit={(e)=>{e.preventDefault();setAuth("logged in")}}>
                    <Input type="email" placeholder="Email" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
                    <Input type="password" placeholder="Password" className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5" />
                    <div className="mt-5 flex justify-between items-center">
                        <Checkbox label="Remember me" boxClasses="border-[##B7B7B7] dark:border-[##B7B7B7]" labelClasses="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat"/>
                        <Text as="p" className="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat">Forgot  Password?</Text>
                    </div>
                    <Button onClick={()=>{setAuth("logged in")}} text="Login" className="mt-10 w-full  bg-blue-login rounded-iphone  text-fs-15 text-white font-normal"/>
                </form>
                <GoogleLogIn/>
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