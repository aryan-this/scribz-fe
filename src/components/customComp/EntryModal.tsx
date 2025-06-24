import { Input } from "../customComp/Input";


type EntryModalProps = {
    open: boolean;
    onClose: () => void;
};

export function EntryModal({ open, onClose }: EntryModalProps) {
    return (
        <div>
            {open && (
                <div className='bg-purple-900/50 w-screen h-screen fixed top-0 left-0 flex items-center justify-center'>
                    <div className='bg-white h-50 w-80' >
                        <Input placeholder='Link' />

                    </div>      
                </div>
            )}
        </div>
    );
}
