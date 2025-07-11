import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge"
import { IconPlus } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { useEffect } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

interface CardProps {
  title?: string;
  link: string;
  type: "X" | "Youtube";
  description: string;
}

export default function ProjectCard({
  title,
  link,
  type,
  description,
}: CardProps) {
  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <Card className="w-[300px] ">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex items-center">
          {type === "X" && <IconBrandX className="cursor-pointer" />}
          {type === "Youtube" && (
            <IconBrandYoutube className="cursor-pointer" />
          )}
          <CardTitle className="ml-2 text-base font-semibold text-gray-800 px-2 break-words whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
            {title?.slice(0, 13)}{title && title.length > 13 ? "..." : ""}
          </CardTitle>
        </div>
        <div className="flex gap-4 pt-0">
          <IconShare className="h-4.5 w-5  cursor-pointer" />
          <IconTrash className="h-5 w-5  cursor-pointer" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="px-2 py-1 text-sm text-gray-700 break-words whitespace-normal overflow-hidden">{description}</div>
        <div>
          {type === "Youtube" && (
            <div className="mt-5 w-full h-0 pb-[56.25%] relative overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://youtube.com/embed/${new URL(
                  link
                ).searchParams.get("v")}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}

          {type === "X" && (
            <div className="mt-5 w-full max-h-[220px] overflow-x-hidden overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-rounded">
              <blockquote className="twitter-tweet" data-width="280">
                <a href={link.replace("x.com", "twitter.com")}>{link}</a>
              </blockquote>
            </div>
          )}
        </div>
        <div className=" max-w-full px-2 py-3 pb-0"></div>
      </CardContent>
    </Card>
  );
}
