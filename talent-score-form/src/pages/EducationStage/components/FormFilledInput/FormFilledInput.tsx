import React from 'react'
 import "./FormFilledInput.scss";
 
export interface IFormFillInput{
widthClass:string
}

const FormFilledInput = (props:IFormFillInput) => {
    const {widthClass}=props;
  return (
    <div className='slider'>
        <div className={` green ${widthClass}`}></div>
      </div>
  )
}

export default FormFilledInput
