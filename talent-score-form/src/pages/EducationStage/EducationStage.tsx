import React, {  useState } from 'react'
import "./EducationStage.scss"
import { CustomSelect } from './components/CustomSelect/CustomSelect';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Title from './components/Title/Title';
import FormFilledInput from './components/FormFilledInput/FormFilledInput';
import { FormSteps, ISelectItem } from '../../interfaces/MainInterfaces';
import { education, level, levelofWinner, optionsNo, optionsYes, place, subject } from '../../lists';
import { useNavigate } from 'react-router-dom';


const EducationStage = () => {
  const { register, handleSubmit, formState: { errors }, control, trigger } = useForm<FormSteps>();
  const onSubmit: SubmitHandler<FormSteps> = (data) => {
    console.log(data);
  };
  
  const [selectedOptionExperience, setselectedOptionExperience] = useState<string>('');
  const [selectedOptionOlympiad, setselectedOptionOlympiad] = useState<string>('');
  const handleExperienceOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setselectedOptionExperience(e.target.value);
  const handleOlympiadOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setselectedOptionOlympiad(e.target.value);
  const [form, setForm] = useState<number>(1);
  const [selectedEducation, setSelectedEducation] = useState<ISelectItem | null >(null);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
const navigate=useNavigate();

  const handleNext = () => {
    if (form === 1 && selectedEducation?.value === education[0].value) {
      setForm(form => form + 2)
    } else {
      setForm(form => form + 1)
    }
  }
  const handlePrevious = () => {
    if (selectedEducation?.value === education[0].value) {
      setForm(form => form - 2)
    } else {
      setForm(form => form - 1)
    }
  }

  const handleEnterNumber = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const inputVal = e.target.value;
    const numericVal = inputVal.replace(/[^0-9]/g, '')
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: numericVal,
    }));
  }

  const handleEducationChange = (selectedOption: ISelectItem | null ) => {
    setSelectedEducation(selectedOption);
  };
  const General = () => (
    <>
      <Title text='Ümumi Suallar' />
      <FormFilledInput widthClass={'green_first'} />
      <div className="full_name">
        <div className="name">
          <label htmlFor='name'>
            Ad*
          </label>
          <input type="text" id='name' {...register("step1.name", { required: true })} />
          {(errors.step1?.name && form === 1) && <span className='error_msg'>Zəhmət olmasa,adınızı daxil edin..</span>}
        </div>
        <div className="surname">
          <label htmlFor='surname'>
            Soyad*
          </label>
          <input type="text" id='surname' {...register("step1.surname", { required: true })} />
          {(errors.step1?.surname && form === 1) && <span className='error_msg'>Zəhmət olmasa,soyadınızı daxil edin..</span>}
        </div>
      </div>
      <div className="experience">
        <p>
          İş təcrübəniz varmı?*
        </p>
        <div className="radio">
          <div className="radio_item">
            <label htmlFor='yes'>Bəli  </label>
            <input type="radio" checked={selectedOptionExperience === 'Bəli'} value="Bəli" id='yes' {...register("step1.experience", { required: true })} onChange={handleExperienceOptionChange} />
          </div>
          <div className="radio_item">
            <label htmlFor='no'>Xeyr  </label>
            <input type="radio" checked={selectedOptionExperience === 'Xeyr'} value="Xeyr" id='no' {...register("step1.experience", { required: true })} onChange={handleExperienceOptionChange} />
          </div>
        </div>
        {(errors.step1?.experience && form === 1) && <span className='error_msg'>Zəhmət olmasa,təcrübənizi daxil edin..</span>}
      </div>
      {selectedOptionExperience === "Bəli" &&
        <>
          <div className="hobby">
            <Controller
              name="step1.hobby"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <CustomSelect options={optionsYes} label="Hazırda məşğuliyyətiniz?*" {...field} />

              }
            />
            {(errors.step1?.hobby && form === 1) && <span className='error_msg'>Zəhmət olmasa,məşğuliyyətinizi daxil edin..</span>}
          </div>
          <div className="education">
            <Controller
              name="step1.education"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={education} label="Təhsiliniz?*" {...field} value={selectedEducation}
                onChange={(selectedOption: ISelectItem ) => {
                  field.onChange(selectedOption);
                  handleEducationChange(selectedOption);
                }} />}
            />
            {(errors.step1?.education && form === 1) && <span className='error_msg'>Zəhmət olmasa,təhsilinizi daxil edin..</span>}
          </div>

          <div className="level">
            <Controller
              name="step1.level"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={level} label="Aşağıdakılardan hansı sizə uyğundur?*" {...field} />}
            />
            {(errors.step1?.level && form === 1) && <span className='error_msg'>Zəhmət olmasa,sizə uyğunu daxil edin..</span>}
          </div>
        </>
      }
      {selectedOptionExperience === "Xeyr" &&
        <>
          <div className="hobby">
            <Controller
              name="step1.hobby"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <CustomSelect options={optionsNo} label="Hazırda məşğuliyyətiniz?*" {...field} />

              }
            />
            {errors.step1?.hobby && form === 1 && <span className='error_msg'>Zəhmət olmasa,məşğuliyyətinizi daxil edin..</span>}
          </div>
          <div className="education">
            <Controller
              name="step1.education"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={education} label="Təhsiliniz?*" {...field} value={selectedEducation} onChange={(selectedOption: ISelectItem ) => {
                field.onChange(selectedOption);
                handleEducationChange(selectedOption);
              }} />}
            />
            {(errors.step1?.education && form === 1) && <span className='error_msg'>Zəhmət olmasa,təhsilinizi daxil edin..</span>}
          </div>

          <div className="level">
            <Controller
              name="step1.level"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={level} label="Aşağıdakılardan hansı sizə uyğundur?*"  {...field} />}
            />
            {(errors.step1?.level && form === 1) && <span className='error_msg'>Zəhmət olmasa,sizə uyğunu daxil edin..</span>}
          </div>
        </>
      }
    </>

  )

  const SecondaryTechnicalHigherEdu = () => (
    <>
      <Title text='Orta, texniki və ali təhsil sualları' />
      <FormFilledInput widthClass={'green_second'} />
      {selectedEducation?.value === education[1].value &&
        <div className="point">
          <label htmlFor='pointSchool'>
            Peşə təhsili üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointSchool' {...register("step2.school", { required: true })} placeholder='0-50' value={inputValues.input1} onChange={(e) => handleEnterNumber(e, 'input1')} />
          {(errors.step2?.school && form === 2) && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {(selectedEducation?.value === education[2].value || selectedEducation?.value === education[3].value || selectedEducation?.value === education[4].value) &&
        <div className="point">
          <label htmlFor='pointBachelor'>
            Bakalavr pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointBachelor' pattern="[0-9]*" {...register("step2.bachelor", { required: true })} placeholder='0-700' value={inputValues.input2} onChange={(e) => handleEnterNumber(e, 'input2')} />
          {(errors.step2?.bachelor && form === 2) && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {(selectedEducation?.value === education[3].value || selectedEducation?.value === education[4].value) &&
        <div className="point">
          <label htmlFor='pointMaster'>
            Magistratura pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointMaster' {...register("step2.master", { required: true })} placeholder='0-100' value={inputValues.input3} onChange={(e) => handleEnterNumber(e, 'input3')} />
          {(errors.step2?.master && form === 2) && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {selectedEducation?.value === education[4].value &&
        <div className="point">
          <label htmlFor='pointDoctoral'>
            Doktorantura pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointDoctoral' {...register("step2.doctoral", { required: true })} placeholder='0-8' value={inputValues.input4} onChange={(e) => handleEnterNumber(e, 'input4')} />
          {(errors.step2?.doctoral && form === 2) && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }

    </>
  )

  const Olympiad = () => (
    <>
      <Title text='Olimpiada sualları' />
      <FormFilledInput widthClass={'green_third'} />
      <div className="olympiad">
        <p>
          Olimpiyada qalibi olmusunuzmu?*
        </p>
        <div className="radio">
          <div className="radio_item">
            <label htmlFor='yes'>Bəli  </label>
            <input type="radio" checked={selectedOptionOlympiad === 'Bəli'} value="Bəli" id='yes' {...register("step3.olympiad", { required: true })} onChange={handleOlympiadOptionChange} />
          </div>
          <div className="radio_item">
            <label htmlFor='no'>Xeyr  </label>
            <input type="radio" checked={selectedOptionOlympiad === 'Xeyr'} value="Xeyr" id='no' {...register("step3.olympiad", { required: true })} onChange={handleOlympiadOptionChange} />
          </div>
        </div>
        {(errors.step3?.olympiad && form === 3) && <span className='error_msg'>Zəhmət olmasa,cavabınızı daxil edin..</span>}
      </div>
      {selectedOptionOlympiad === "Bəli" && form === 3 &&
        <>
          <div className="subject">
            <Controller
              name="step3.subject.value"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={subject} label="Hansı fənn üzrə olimpiyada qalibi olmusunuz?*" {...field} />}
            />
            {(errors.step3?.subject && form === 3) && <span className='error_msg'>Zəhmət olmasa,fənni daxil edin..</span>}
          </div>
          <div className="level">
            <Controller
              name="step3.level.value"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={levelofWinner} label="Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?*" {...field} />}
            />
            {(errors.step3?.level && form === 3) && <span className='error_msg'>Zəhmət olmasa,mərhələni daxil edin..</span>}
          </div>
          <div className="place">
            <Controller
              name="step3.place"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={place} label="Neçənci yer əldə etmisiniz?" {...field} />}
            />
            {(errors.step3?.place && form === 3) && <span className='error_msg'>Zəhmət olmasa,yerinizi daxil edin..</span>}
          </div>
        </>
      }
    </>
  )

  return (
        <form onSubmit={handleSubmit(onSubmit) }>
          {form === 1 && General()}
          {form === 2 && SecondaryTechnicalHigherEdu()}
          {form === 3 && Olympiad()}
          {form < 4 &&
            <button className='btn btn_next' onClick={async () => {
              const isValid = await trigger();
              if (isValid) {
                handleNext();
              }
            }} >
              Növbəti
              {'  '} <img src={require("../images/Vector.png")} alt="vector" />
            </button>
          }
          {form > 1 &&
            <button className='btn btn_previous' onClick={() => handlePrevious()}>
              Geri
              {'  '} <img src={require("../images/Vector (1).png")} alt="vector" />
            </button>
          }
          {form === 3 &&
            <button className='btn btn_submit' type='submit'>
              Təsdiq et
            </button>
          }
        </form>
  )
}

export default EducationStage;
