import React, { createContext, useState} from "react";


export const ProjectContext = createContext({});

export default function ProjectProvider({ children }) {
  const [idProject, setIdProject] = useState('');
    
  return (
    <ProjectContext.Provider value={{ idProject, setIdProject}}>
      {children}
    </ProjectContext.Provider>
  );
}


