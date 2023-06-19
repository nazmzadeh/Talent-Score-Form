import React from 'react'
import { useForm } from 'react-hook-form';
import  { FormSteps } from "../../FormPage";

const TextInput = () => {
  const { register, formState: { errors } } = useForm<FormSteps>();

  return (
    <>
        {/* <label htmlFor='name'>
          Ad*
        </label>
        <input type="text" id='name' {...register("", { required: true })} />
        {errors.name && <span className='error_msg'>Zəhmət olmasa,adınızı daxil edin..</span>} */}
    </>
  )
}

export default TextInput
