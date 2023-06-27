import React, {forwardRef } from 'react'
import "./CustomSelect.scss"
import Select from 'react-select';
import { ISelectProps } from '../../../../interfaces/MainInterfaces';


export const CustomSelect = forwardRef<HTMLDivElement, ISelectProps>(
  (props, ref) => {
  const {onChange,value,label,options}=props;

  return (
    <div className='select_container' ref={ref}>
      <label>{label}</label>
        <Select
        defaultValue={value}
        onChange={onChange}
        options={options}
        isMulti={false}
        classNamePrefix="select"
        name='select'
        className='custom_select'
        value={value}
        placeholder={options.at(0)?.value}
      />
    </div>
  )
}
)
