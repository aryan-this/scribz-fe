import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { IconPlus } from "@tabler/icons-react"
import { IconBrandYoutube } from "@tabler/icons-react"
import { IconShare } from "@tabler/icons-react"
import {IconTrash} from '@tabler/icons-react'
import { useEffect } from "react"

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

export default function ProjectCard() {
  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);
  
  return (
    <Card className="w-[320px]">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className='flex items-center'>
          <IconBrandYoutube className ='cursor-pointer'/>
          <CardTitle className="text-base font-semibold text-gray-800 px-2">Project Ideas</CardTitle>
        </div>
        <div className='flex gap-3'>
          <IconShare className="h-4 w-4  cursor-pointer" />
          <IconTrash className="h-4 w-4  cursor-pointer" />
        </div>
      </CardHeader>
      <div className=' max-w-full px-2 py-3 pb-0'>
        <iframe src="https://www.youtube.com/embed/HAdROFr7VRQ?si=SWqwtr9Wlc7hqU7q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      {/* <div>
        <blockquote className="twitter-tweet">
        <a href="https://twitter.com/username/status/807811447862468608"></a> 
        </blockquote>
      </div> */}
      
    </Card>
  )
}
