import { Input } from "@/components/customComp/Input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import axios from 'axios';
import { BACKEND_URL } from "@/config";
import { useNavigate } from "react-router-dom";



export function Signup(){

    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();


    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL +'/api/v1/signup',{
            username,
            password
        });
        alert('Signed up!')
        navigate('/signin')
    }
    


    return <div className='h-screen w-screen bg-purple-200 flex justify-center items-center'>
        <div className='bg-white rounded-xl border min-w-48 p-8'>
            <Input ref={usernameRef} placeholder='Username'/>
            <Input  ref={passwordRef} placeholder='Password'/>
            <div className='flex justify-center pt-4'>
                <Button onClick={signup} variant='default' size='aaina'> 
                    Signup
                </Button>
            </div>
        </div>

    </div>
}