import { PlusButton } from "../components/customComp/plusButton";

import { ShareButton } from "../components/customComp/shareButton";
import ProjectCard from "../components/customComp/mainCard.tsx";
import { EntryModal } from "../components/customComp/EntryModal.tsx";
import { useState } from "react";
import { Sidebar } from "../components/customComp/Sidebar.tsx";
import { useContent } from "@/hooks/useContent.tsx";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contents= useContent();
  return (
    <div>
      <Sidebar/>
      <div className='ml-60 min-h-screen bg-slate-100'>
        <EntryModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
        <div className="flex justify-end px-6 py-3 gap-2.5 ">
          <PlusButton onClick={() => setIsModalOpen(true)} text="Add" />
          <ShareButton text="Share" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

          {contents.map(({type, link, title, description})=> <ProjectCard
            type={type}
            link={link}
            title={title}
            description={description}/>

        )}
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
