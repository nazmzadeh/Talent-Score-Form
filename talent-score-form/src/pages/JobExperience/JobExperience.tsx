import React, { useState } from 'react'
import './JobExperience.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import Title from '../EducationStage/components/Title/Title';
import FormFilledInput from '../EducationStage/components/FormFilledInput/FormFilledInput';
import { ExperienceFormData, ExperienceList } from '../../interfaces/MainInterfaces';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const JobExperience = (props:ExperienceList) => {
    const {items,onAddExperience,removeExperience}=props;
    const [newExperience,setNewExperience]=useState<ExperienceFormData>({
        id:'',
        profession:'',
        workPlace:'',
        startDate:new Date(),
        endDate:new Date(),
        currentlyWorking:false
      })
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<ExperienceFormData>();
    const onSubmit: SubmitHandler<ExperienceFormData> = (data) => {
        console.log(data);
        onAddExperience(newExperience)
    };
    const [form, setForm] = useState(1);
    const handleNext = () => {
        setForm(form + 1)
    }
    const handlePrevious = () => {
        setForm(form - 1)
    }
    const navigate = useNavigate();
      const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
         const {name,value}=e.target;
         if (name === 'startDate' || name === 'endDate') {
            const dateValue=new Date(value)
            setNewExperience((prevExperience)=>({...prevExperience,[name]:dateValue}))
         }else{
            setNewExperience((prevExperience)=>({...prevExperience,[name]:value}))
         }
      }
     
    const JobExperienceInfos = () => (
        <>
            <Title text='İş təcrübəsi' />
            <FormFilledInput widthClass='green_fifty' />
            <div className="work_place">
                <label htmlFor='workPlace'>
                    Çalışdığınız müəssisənin adını qeyd edin.*
                </label>
                <input type="text" id='workPlace' {...register("workPlace", { required: true })} name='workPlace' onChange={handleInputChange} value={newExperience.workPlace} />
                {(errors.workPlace && form === 1) && <span className='error_msg'>Zəhmət olmasa,müəssisənin adını daxil edin..</span>}
            </div>
            <div className="profession">
                <label htmlFor='profession'>
                    Vəzifənizi qeyd edin.*
                </label>
                <input type="text" id='profession' {...register("profession", { required: true })} name='profession' onChange={handleInputChange} value={newExperience.profession}/>
                {(errors.profession && form === 1) && <span className='error_msg'>Zəhmət olmasa,vəzifənizi daxil edin..</span>}
            </div>
            <div className="startDate date">
                <label htmlFor='startDate'>
                    İşə başlama tarixi:
                </label>
                <div className="custom_input">
                    <input type="date" id='startDate' {...register("startDate", { required: true })} name='startDate' onChange={handleInputChange}  value={newExperience.startDate.toISOString().split('T')[0]} />
                    <img src={require('../images/Vector (2).png')} alt="calendar" className='calendar_icon' />
                    {(errors.startDate || errors.startDate==Date.now()) && <span className='error_msg'>Zəhmət olmasa,işə başlama tarixini daxil edin..</span>}
                </div>
            </div>
            <div className="endDate date">
                <label htmlFor='endDate'>
                    İşdən ayrılma tarixi:
                </label>
                <div className="custom_input">
                    <input type="date" id='endDate' {...register("endDate", { required: true })} name='endDate' onChange={handleInputChange}  value={newExperience.endDate.toISOString().split('T')[0]} />
                    <img src={require('../images/Vector (2).png')} alt="calendar" className='calendar_icon' />
                    {(errors.endDate) && <span className='error_msg'>Zəhmət olmasa,işdən ayrılma tarixini daxil edin..</span>}
                </div>
            </div>
            <div className="checkbox">
                <label htmlFor="work">Hal hazırda çalışıram  {' '}</label>
                <input type="checkbox" id='work' {...register("currentlyWorking", { required: false })} />
            </div>
            <button className='btn save' type='submit'>Yadda saxla {' '}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
            </button>
        </>
    )

    const JobExperienceList = () => (
        <>
            <Title text='İş təcrübəsi' />
            <FormFilledInput widthClass='green_third' />
            <ol className="experience_list">
                {items.map((item) => (
                    <li key={uuidv4()}>
                        <div className="info">
                            <span>{item.workPlace}, {item.profession}</span>
                        </div>
                        <div className="dates">
                            {item.startDate.toISOString().substring(0, 7)} / {item.endDate.toISOString().substring(0, 7)}
                        </div>
                        <div className="remove">
                            <img src={require('../images/Vector (3).png')} onClick={()=>removeExperience(item.id)} alt="remove" />
                        </div>
                    </li>
                   
                )
                )}
            </ol>
            <button className='btn add' type='button' onClick={()=>handlePrevious()}>Yeni iş yeri əlavə et +</button>
        </>
    )
    return (
        <form onSubmit={handleSubmit(onSubmit)} id='experience'>
            <button className='btn btn_previous' type='button' onClick={() => {
                handlePrevious()
                form===1 && navigate('/sport-stage')}}>
                Geri
                {'  '} <img src={require("../images/Vector (1).png")} alt="vector" />
            </button>
            <button className='btn btn_next' type='button' onClick={()=>{
                    handleNext()
                form === 2 && navigate('/program-stage')
            }}>
                Növbəti
                {'  '} <img src={require("../images/Vector.png")} alt="vector" />
            </button>
            {form === 1 && JobExperienceInfos()}
            {form === 2 && JobExperienceList()}
        </form>
    )
}

export default JobExperience
