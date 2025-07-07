import { useRef, useState } from "react";
import { Input } from "../customComp/Input";
import { Button } from "../ui/button";
import { Textarea } from "./text-area";
import { IconX } from '@tabler/icons-react';
import axios from "axios";
import { BACKEND_URL } from "@/config";

type EntryModalProps = {
  open: boolean;
  onClose: () => void;
};

const ContentType = {
  Youtube: 'Youtube',
  X: 'X'
} as const;

type ContentType = typeof ContentType[keyof typeof ContentType];

export function EntryModal({ open, onClose }: EntryModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const description = descRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`,{
        title,
        type,
        link,
        description
    },{
        headers:{
            "token": localStorage.getItem('token')
        }
    })

    console.log("Added Content:");
    // Optionally call a parent callback to pass the new content up
    onClose();
  };

  return (
    open ? (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[320px] p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-600">
            <IconX size={22} />
          </button>

          <div className="space-y-4 mt-2">
            <Input ref={linkRef} placeholder="Link" />
            <Input ref={titleRef} placeholder="Title" maxLength={13} />
            <Textarea ref={descRef} placeholder="Description" />

            <div className="flex justify-center gap-3 pt-2">
              <Button
                variant={type === ContentType.Youtube ? "default" : "outline"}
                onClick={() => setType(ContentType.Youtube)}
              >
                Youtube
              </Button>
              <Button
                variant={type === ContentType.X ? "default" : "outline"}
                onClick={() => setType(ContentType.X)}
              >
                X
              </Button>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={addContent} className="w-full">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}
