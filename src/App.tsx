import { PlusButton } from "./components/customComp/plusButton"
// import { ShareButton } from "./components/customComp/shareButton"
import ProjectCard from "./components/customComp/mainCard.tsx"

function App() {
  return (
    <div className ='px-5 py-5 '>
      <PlusButton  text='Add' />
      <ProjectCard />
    </div>
      
    
  )
}

export default App

