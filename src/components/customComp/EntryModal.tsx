import { Input } from "../customComp/Input";
import { Textarea } from "./text-area";
import {IconX} from '@tabler/icons-react'



type EntryModalProps = {
    open: boolean;  // the state variable
    onClose: () => void;  // the function to change the state variable using setSmthg
};

export function EntryModal({ open, onClose }: EntryModalProps) {
    return (
        <div>
            {open && (
                <div className='bg-gray-900/50 w-screen h-screen fixed top-0 left-0 flex items-center justify-center'>
                    <div className='bg-white h-70 w-80 rounded-lg' >
                        <span onClick={onClose} className='flex justify-end mt-3 mr-3'>
                            <IconX/>
                        </span>
                        
                        <Input placeholder='Link' />
                        <Input placeholder='Title'/>
                        <Textarea placeholder='Description'/>

                    </div>      
                </div>
            )}
        </div>
    );
}
