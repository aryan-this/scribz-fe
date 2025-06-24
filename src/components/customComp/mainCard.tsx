import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { IconPlus } from "@tabler/icons-react"
import { IconBrandYoutube } from "@tabler/icons-react"
import { IconShare } from "@tabler/icons-react"
import {IconTrash} from '@tabler/icons-react'
import {IconBrandX} from '@tabler/icons-react'
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

interface CardProps{
  title?: string
  link: string;
  type: "tweet" | "youtube";
  description: string
}

export default function ProjectCard({title, link, type, description}: CardProps) {
  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);
  
  return (
    <Card className="w-[380px]">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className='flex items-center'>
          {type==='tweet' && <IconBrandX className ='cursor-pointer'/>}
          {type==='youtube' && <IconBrandYoutube className ='cursor-pointer'/>}
          <CardTitle className="ml-2 text-base font-semibold text-gray-800 px-2">{title}</CardTitle>
        </div>
        <div className='flex gap-4 pt-0'>
          <IconShare className="h-4.5 w-5  cursor-pointer" />
          <IconTrash className="h-5 w-5  cursor-pointer" />
        </div>
        
      </CardHeader>
      
      <CardContent>
        <div>
          {description}
        </div>
        <div>
        {type==='youtube' && 
        <div className='mt-5 aspect-video max-w-full'>
          <iframe src={`https://youtube.com/embed/${new URL(link).searchParams.get("v")}`} 
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        }
        {type==='tweet' && 
        <div className="max-h-[250px] overflow-y-auto max-w-full">
          <blockquote className="twitter-tweet">
            <a href={link.replace('x.com','twitter.com')}></a> 
          </blockquote>
        </div>}
      </div>
      <div className=' max-w-full px-2 py-3 pb-0'>
        
      </div>
      </CardContent>
      

      
    </Card>
  )
}
