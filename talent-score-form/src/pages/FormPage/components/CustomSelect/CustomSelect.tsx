import React, {forwardRef } from 'react'
import { ControllerRenderProps } from 'react-hook-form';
import "./CustomSelect.scss"
import Select from 'react-select';


interface ISelectProps extends ControllerRenderProps {
  label: string;
  options: ISelectItem[];
}
export interface ISelectItem{
  label:string;
  value:string;
}
export const ControllerComponent =(props:ISelectProps) => {
  const {onChange,value,label,options}=props;

  return (
    <div className='select_container'>
      <label>{label}</label>
        <Select
        defaultValue={value}
        onChange={onChange}
        options={options}
        isMulti={false}
        classNamePrefix="select"
        name='hobby'
        className='custom_select'
        value={value}
        placeholder={options.at(0)?.value}
      />
    </div>
  )
}

export const CustomSelect = forwardRef(ControllerComponent);
