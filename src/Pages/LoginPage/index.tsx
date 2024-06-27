import { useAuth } from "@/Context/AuthProvider";
import logo from "@/../public/logo_1.svg";
import { Input } from "@/components/common/ui/input";
import { useEffect, useState } from "react";
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
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { LOG_IN, SIGN_IN_WITH_GOOGLE } from "@/api/Endpoints";
import apiCall from "@/api/apiCall";

function GoogleLogIn() {
  const [user, setUser]: any = useState(null);
  const { setAuth } = useAuth();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      axios.post(SIGN_IN_WITH_GOOGLE, user).then((res: any) => {
        setAuth(res.data);
      });
    }
  }, [user]);
  return (
    <div
      onClick={() => login()}
      className="w-fit flex justify-start items-center space-x-5 bg-transparent hover:bg-Gray-bgLight dark:hover:bg-Gray-dark-gray rounded-iphone pl-2 pr-10 py-1 cursor-pointer border border-Gray-darkGray"
    >
      <div className="p-1 bg-white rounded-full">
        <img src={GoogleLogo} alt="" />
      </div>
      <div>
        <Text className="text-fs-15 font-Montserrat" as="p">
          Sign in with Google
        </Text>
      </div>
    </div>
  );
}

export const AuthScreenNew = () => {
  const { setAuth } = useAuth();
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPass, setLogInPass] = useState("");
  const LogIn = async () => {
    const res = await apiCall(LOG_IN, "POST", {
      email: logInEmail,
      password: logInPass,
    });
    setAuth(res);
  };
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
                  LogIn();
                }}
              >
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="acb@hamil.com"
                      value={logInEmail}
                      onChange={(e) => {
                        setLogInEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={logInPass}
                      onChange={(e) => {
                        setLogInPass(e.target.value);
                      }}
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
                  setAuth({});
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
