import { Input } from "@/components/customComp/Input";
import { Button } from "@/components/ui/button";

export function Signup(){
    return <div className='h-screen w-screen bg-purple-200 flex justify-center items-center'>
        <div className='bg-white rounded-xl border min-w-48 p-8'>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <div className='flex justify-center pt-4'>
                <Button variant='default' size='aaina'> 
                    Signup
                </Button>
            </div>
        </div>

    </div>
}