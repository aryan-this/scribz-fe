import { PlusButton } from "./components/customComp/plusButton"

import { ShareButton } from "./components/customComp/shareButton"
import ProjectCard from "./components/customComp/mainCard.tsx"
import { EntryModal } from "./components/customComp/EntryModal.tsx"
import { useState } from "react";

function App() {

  const [isModalOpen, setIsModalOpen]= useState(false);
  return (

    <div>
      <EntryModal open={isModalOpen} onClose={()=>{
        setIsModalOpen(false)
      }}/>
      <div className ='flex justify-end px-6 py-3 gap-2.5 '>
      <PlusButton onClick={()=> setIsModalOpen(true)} text='Add' />
      <ShareButton text='Share' />
    </div>
      <div className='flex p-4 gap-4'>
        <ProjectCard 
        link="https://x.com/Tezzathekchen/status/1937165232084049988"
        type="tweet"
        description='this is the first tweet I wanna render on the screen'
       />
       <ProjectCard 
        title='video'
        link="https://www.youtube.com/watch?v=YN_mZ67qpBQ"
        type="youtube"
        description='this is the video I wanna render on the screen'
       />
    </div>
    </div>
    
      
      
      
    
  )
}

export default App

