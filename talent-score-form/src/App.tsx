import React, { useState } from "react";
import "./App.scss";
import EducationStage from "./pages/EducationStage/EducationStage";
import { Route, Routes } from "react-router-dom";
import JobExperience from "./pages/JobExperience/JobExperience";
import { v4 as uuidv4 } from 'uuid';
import LeftPart from "./pages/LeftPart/LeftPart";
import Stages from "./pages/Stages/Stages";
import { ExperienceFormData } from "./interfaces/MainInterfaces";

function App() {
const [list,setList]=useState<ExperienceFormData[]>([])

const handleAddExperience = (newExperience: ExperienceFormData) => {
  const experienceWithId = { ...newExperience, id: uuidv4() };
  setList((prevItems) => [...prevItems, experienceWithId]);
};
const removeExperience=(id:string)=>{
   const removedList= list.filter((exp)=> {return exp.id!==id})
   setList(removedList)
}
  return (
    <section id="form">
      <LeftPart />
      <div className="form_part">
        <Stages />
        <Routes>
          <Route path="/education-stage" element={<EducationStage />} />
          <Route path="/" element= { <EducationStage />} />
          <Route path="/job-experience-stage" element={<JobExperience removeExperience={removeExperience} onAddExperience={handleAddExperience} items={list} />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
