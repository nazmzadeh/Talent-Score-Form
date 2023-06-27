import { ControllerRenderProps } from "react-hook-form";


export interface ISelectProps extends ControllerRenderProps {
    label: string;
    options: ISelectItem[];
  }
  export interface ISelectItem{
    label:string;
    value:string;
  }
export interface FormSteps  {
    step1: Form1Data;
    step2: Form2Data;
    step3?: Form3Data;
  }
  export interface Form3Data {
    olympiad: boolean;
    subject: ISelectItem;
    level: ISelectItem;
    place: ISelectItem;
  }
  export interface Form2Data {
    school: string,
    bachelor: string,
    master: string,
    doctoral: string
  }
  
  export interface Form1Data {
    name: string;
    surname: string;
    experience: boolean;
    hobby: ISelectItem;
    education: ISelectItem;
    level: ISelectItem;
  };

  
  export interface ExperienceFormData {
    id:string
    workPlace: string;
    profession: string;
    startDate: Date;
    endDate: Date;
    currentlyWorking:boolean;
  }
  export interface ExperienceList{
    items:ExperienceFormData[];
    onAddExperience(newExperience:ExperienceFormData):void
    removeExperience(id:string):void;
  }