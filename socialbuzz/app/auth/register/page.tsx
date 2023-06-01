"use client";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import axios from "axios"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/buttons/Button";
import BoxTwo from "../BoxTwo";

const Register = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ firstName, setFirstName ] = useState<string>('');
    const [ lastName, setLastName ] = useState<string>('');
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const session = useSession();

    const router = useRouter();

    const handleRegister = useCallback(async () => {
        setIsLoading(true);
        // post request to register

        const data = {
            email,
            firstName,
            lastName,
            username,
            password
        }

        try {
            await axios.post('/api/register', data)
            .then(() => signIn('credentials', {
                username,
                password,
                callbackUrl: '/home'
            }))
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [email, firstName, lastName, username, password]);


    return (
        <div className='h-full w-full bg-white
            flex flex-col gap-4 items-center
            py-4'>
            <div className="w-[350px] md:border-[0.7px] 
            border-neutral-300 p-5 flex items-center
            flex-col gap-3 h-full border-[0px]">
                <h1 className="text-3xl font-semibold">Social Buzz</h1>
                <p className="text-neutral-700 w-full
                text-center flex flex-col font-medium font-sans">
                    Sign up to see photos and videos from your friends.
                </p>
                {/* authentication with facebook */}
                <Button bgColor="#3b5998" textColor="#fff" 
                text="Log in with Facebook" onClick={handleRegister}
                disabled={isLoading}>
                    <ImFacebook2 className="text-xl"/>
                </Button>
                <div className="w-full
                flex items-center justify-center gap-2 py-2">
                    <div className="w-full h-[0.7px] bg-neutral-300"></div>
                    <span className="text-neutral-500 font-semibold">OR</span>
                    <div className="w-full h-[0.7px] bg-neutral-300"></div>
                </div>
                <Input disabled={isLoading} 
                    value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <Input disabled={isLoading} 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name"/>
                <Input disabled={isLoading} 
                    value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name"/>
                <Input disabled={isLoading} 
                    value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
                <Input disabled={isLoading} 
                    value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <p className="text-neutral-500 w-full text-center text-xs">
                    People who use our service 
                    may have uploaded your contact information 
                    to Instagram. 
                    <span className="text-[blue] cursor-pointer">
                        Learn More
                    </span>
                </p>
                <p className="text-neutral-500 w-full text-center text-xs">
                    By tapping Sign Up, you agree to our
                    <span className="text-[blue] cursor-pointer">
                        Terms
                    </span>,
                    <span className="text-[blue] cursor-pointer">
                        Data Policy
                    </span> and
                    <span className="text-[blue] cursor-pointer">
                        Cookies Policy
                    </span>.
                </p>
                <button className="w-full bg-blue-500
                text-white font-semibold py-2 rounded-md
                hover:bg-blue-600 transition duration-200
                " onClick={handleRegister} disabled={isLoading}>
                    Sign Up
                </button>
            </div>
            <BoxTwo textOne="Have an account?" textTwo="Log in" routerLink="/auth/login"/>
        </div>
    )
}

export default Register;

