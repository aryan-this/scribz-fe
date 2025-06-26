import { IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import { SidebarItem } from "./SidebarItem";


export function Sidebar() {
    return (
        <div className='h-screen bg-white border-r-3 w-60 absolute left-0 top-0'>
            <div>
                <div className='flex cursor-pointer'>
                    <IconBrandX/>
                    Tweet
            </div>
            <div className='flex cursor-pointer'>
                <IconBrandYoutube/>
                Youtube
            </div>
            </div>
            
        </div>
    );
}