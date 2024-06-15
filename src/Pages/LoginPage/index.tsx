import { useAuth } from "@/Context/AuthProvider";
import Loginimg from "@/assets/images/login_poster.svg";
import Registerimg from "@/assets/images/register_poster.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import logo from "@/../public/logo_1.svg";
import { Input } from "@/components/common/ui/input";
import { useState } from "react";
import Checkbox from "@/components/common/CheckBox";
import Text from "@/components/common/Text";
import GoogleLogo from "@/assets/images/Google_Logo.svg";

import { Button } from "@/components/common/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/ui/card";
import { Label } from "@/components/common/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";

function GoogleLogIn() {
  return (
    <div className="w-fit flex justify-start items-center space-x-5 bg-transparent hover:bg-Gray-bgLight dark:hover:bg-Gray-dark-gray rounded-iphone pl-2 pr-10 py-1 cursor-pointer border border-gray">
      <div className="p-1 bg-white rounded-full">
        <img src={GoogleLogo} alt="" />
      </div>
      <Text className="text-fs-15 font-Montserrat" as="p">
        Sign in with Google
      </Text>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img width={85} height={85} src={logo} alt="" />
      <h1 className="text-[30px] font-bold mt-3 font-Montaga">Squad</h1>
      <p className="text-[#717171] text-sm font-semibold font-Montserrat">
        One Stop Solution For All Your School Needs{" "}
      </p>
    </div>
  );
}

function Register({ setLoginView }: any) {
  const { setAuth } = useAuth();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray1 w-[689px] min-h-[599px] px-5 py-2 pb-17.5 border-Gray-gray2 border rounded-lg relative">
        <img
          className="absolute -right-48 top-10 -z-10"
          width={285}
          height={435}
          src={Registerimg}
          alt=""
        />
        <div className="flex justify-start items-center space-x-2">
          <img src={arrowLeft} alt="" width={18} height={18} />
          <div
            onClick={() => {
              setLoginView(true);
            }}
            className="cursor-pointer font-Montserrat"
          >
            <p className="text-[16px] font-semibold">Login</p>
            <p className="h-[1px] w-[22px] bg-blue-login"></p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-10 px-24">
          <Header />
          <form
            className="w-full mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              setAuth("logged in");
            }}
          >
            <div className="flex justify-between items-center space-x-5 ">
              <Input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5"
            />
            <Input
              type="password"
              placeholder="Re-Password"
              className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5"
            />
            <div className="mt-5 flex justify-between items-center">
              <Checkbox
                label="Terms Of Use"
                boxClasses="border-[##B7B7B7] dark:border-[##B7B7B7]"
                labelClasses="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat"
              />
            </div>
            {/* <Button
              onClick={() => {
                setAuth("logged in");
              }}
              text="Register"
              className="mt-10 w-full  bg-blue-login rounded-iphone text-fs-15 font-normal text-white"
            /> */}
          </form>
          <GoogleLogIn />
        </div>
      </div>
    </div>
  );
}

function Login({ setLoginView }: any) {
  const { setAuth } = useAuth();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray1 w-[689px] min-h-[599px] px-5 py-2 pb-17.5 border-Gray-gray2 border rounded-lg relative">
        <img
          className="absolute -left-48 top-10 -z-10"
          width={285}
          height={435}
          src={Loginimg}
          alt=""
        />
        <div className="flex justify-end items-center space-x-2">
          <div
            onClick={() => {
              setLoginView(false);
            }}
            className="cursor-pointer font-Montserrat"
          >
            <p className="text-[16px] font-semibold">Register</p>
            <p className="h-[1px] w-[52px]  bg-blue-login"></p>
          </div>
          <img src={arrowRight} alt="" width={18} height={18} />
        </div>
        <div className="flex justify-center flex-col items-center mt-8 px-24">
          <Header />
          <form
            className="w-full mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              setAuth("logged in");
            }}
          >
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-transparent border-[#B7B7B7] dark:border-[#B7B7B7] text-[#6a6a6a] dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mt-8.5"
            />
            <div className="mt-5 flex justify-between items-center">
              <Checkbox
                label="Remember me"
                boxClasses="border-[##B7B7B7] dark:border-[##B7B7B7]"
                labelClasses="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat"
              />
              <Text
                as="p"
                className="text-black dark:text-black text-fs-13 cursor-pointer font-Montserrat"
              >
                Forgot Password?
              </Text>
            </div>
            {/* <Button
              onClick={() => {
                setAuth("logged in");
              }}
              text="Login"
              className="mt-10 w-full  bg-blue-login rounded-iphone  text-fs-15 text-white font-normal"
            /> */}
          </form>
          <GoogleLogIn />
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  const [loginView, setLoginView] = useState(true);
  return (
    <>
      {loginView ? (
        <Login setLoginView={setLoginView} />
      ) : (
        <Register setLoginView={setLoginView} />
      )}
    </>
  );
}

export const AuthScreenNew = () => {
  const { setAuth } = useAuth();
  return (
    <div className="dark:bg-black flex flex-col h-screen items-center space-y-2 justify-center relative">
      <div className="w-fit h-fit absolute right-2 top-2">
        <ThemeToggle
          bgClassName="bg-white dark:bg-black hover:bg-Gray-light-gray dark:hover:bg-Gray-dark-gray"
          sunClassName="text-Gray-dark-gray"
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img width={100} height={100} src={logo} alt="" />
          <p className="text-[#356AC3] text-sm font-semibold font-Montserrat text-center">
            One Stop Solution For All Your School Needs{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center px-2">
        <Tabs className="sm:w-[400px]" defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to login your account
                </CardDescription>
              </CardHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAuth("logged in");
                }}
              >
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="acb@hamil.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-col space-y-5 items-center">
                    <Button
                      className="w-full bg-Blue-primaryBlue dark:bg-Blue-primaryBlue dark:text-white hover:bg-Blue-hoverPrimaryBlue dark:hover:bg-Blue-hoverPrimaryBlue"
                      type="submit"
                    >
                      Log In
                    </Button>
                    <GoogleLogIn />
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Provide all details to create your account
                </CardDescription>
              </CardHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAuth("logged in");
                }}
              >
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="acb@hamil.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password-repeate">Repeat Password</Label>
                    <Input
                      id="password-repeate"
                      type="password"
                      placeholder="Enter your password again"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="mobile-number">Mobile Number</Label>
                    <Input
                      id="mobile-number"
                      type="number"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-col space-y-5 items-center">
                    <Button
                      className="w-full bg-Blue-primaryBlue dark:bg-Blue-primaryBlue dark:text-white hover:bg-Blue-hoverPrimaryBlue dark:hover:bg-Blue-hoverPrimaryBlue"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                    <GoogleLogIn />
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
