"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import BoxTwo from "../BoxTwo";
import { signIn } from "next-auth/react";



const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErr, setIsErr] = useState<string>("");

  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    // post request to login
    try {
      //sign in user after login
      if (!(username && password)) return;
      await signIn("credentials", {
        username,
        password,
        callbackUrl: "/",
      });
      
    } catch (error) {
      console.log(error);
      router.push("/auth/login");
      setIsErr("Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <div
      className="h-full w-full bg-white
            flex flex-col gap-5 items-center
            py-4"
    >
      <div
        className="w-[350px] md:border-[0.7px] 
            border-neutral-300 p-5 flex items-center
            flex-col gap-5 border-[0px]"
      >
        <h1 className="text-3xl text-black font-semibold mb-7">Social Buzz</h1>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          disabled={isLoading}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          disabled={isLoading}
        />
        <p className="text-red text-sm">
            {
                isErr && "Invalid username or password" 
            } 
        </p>
        <Button onClick={handleLogin} text="Log In" disabled={isLoading} />
        <div
          className="w-full
                flex items-center justify-center gap-2 py-2"
        >
          <div className="w-full h-[0.7px] bg-neutral-300"></div>
          <span className="text-neutral-500 font-semibold">OR</span>
          <div className="w-full h-[0.7px] bg-neutral-300"></div>
        </div>
        <Button
          bgColor="#fff"
          textColor="#3b5998"
          text="Log in with Facebook"
          onClick={() => {}}
          disabled={isLoading}
        >
          <ImFacebook2 className="text-xl" />
        </Button>
        <span
          className="text-neutral-500 
                cursor-pointer text-sm font-normal"
        >
          Forgot password?
        </span>
      </div>
      <BoxTwo
        textOne="Don't have an account?"
        textTwo="Sign up"
        routerLink="/auth/register"
        disabled={isLoading}
      />
    </div>
  );
};

export default Login;
