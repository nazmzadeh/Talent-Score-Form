import React, { forwardRef, useState } from 'react'
import backgroundImg from "../images/Rectangle 24.png";
import logo from "../images/Group.png";
import laptop from "../images/Frame.png";
import "./FormPage.scss"
import { CustomSelect, ISelectItem } from './components/CustomSelect/CustomSelect';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Title from './components/Title/Title';
const optionsYes: ISelectItem[] = [
  { value: 'Təhsil alıram', label: 'Təhsil alıram' },
  { value: 'Çalışıram', label: 'Çalışıram' },
  { value: 'İşsiz', label: 'İşsiz' },
  { value: 'Təhsil alıram və çalışıram', label: 'Təhsil alıram və çalışıram' },
];

const optionsNo: ISelectItem[] = [
  { value: 'Təhsil alıram', label: 'Təhsil alıram' },
  { value: 'Təhsil almıram', label: 'Təhsil almıram' },
];
const education: ISelectItem[] = [
  { value: 'Orta təhsil', label: 'Orta təhsil' },
  { value: 'Peşə təhsili', label: 'Peşə təhsili' },
  { value: 'Bakalavr', label: 'Bakalavr' },
  { value: 'Magistratura', label: 'Magistratura' },
  { value: 'PhD', label: 'PhD' },
];
const level = [
  { value: 'Əlaçı', label: 'Əlaçı' },
  { value: 'Zərbəçi', label: 'Zərbəçi' },
  { value: 'Heç biri', label: 'Heç biri' },
];
const subject = [
  { value: 'Riyaziyyat', label: 'Riyaziyyat' },
  { value: 'Fizika', label: 'Fizika' },
  { value: 'Kimya', label: 'Kimya' },
  { value: 'Informatika', label: 'Informatika' },
  { value: 'Biologiya', label: 'Biologiya' },
  { value: 'Coğrafiya', label: 'Coğrafiya' },
  { value: 'Tarix', label: 'Tarix' },
  { value: 'Azərbaycan dili və ədəbiyyat', label: 'Azərbaycan dili və ədəbiyyat' },
]
const levelofWinner = [
  { value: 'Rayon', label: 'Rayon' },
  { value: 'Region', label: 'Region' },
  { value: 'Respublika', label: 'Respublika' },
  { value: 'Dünya', label: 'Dünya' },
]
const place = [
  { value: '1-ci yer (Qızıl medal)', label: '1-ci yer (Qızıl medal)' },
  { value: '2-ci yer (Gümüş medal)', label: '2-ci yer (Gümüş medal)' },
  { value: '3-cü yer (Bürünc medal)', label: '3-cü yer (Bürünc medal)' },
  { value: '4-cü yer', label: '4-cü yer' },
]

export interface FormSteps extends FormData, Form2Data {
  step1: Form1Data;
  step2: Form2Data;
  step3: Form3Data;
}
export interface Form3Data {
  olympiad: boolean;
  winner: ISelectItem;
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

const FormPage = () => {
  const { register, handleSubmit, formState: { errors }, control, trigger } = useForm<FormSteps>();
  const onSubmit: SubmitHandler<FormSteps> = (data) => {
    console.log(data);
  };
  const [selectedOptionExperience, setselectedOptionExperience] = useState<string>('');
  const [selectedOptionOlympiad, setselectedOptionOlympiad] = useState<string>('');
  const handleExperienceOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setselectedOptionExperience(e.target.value);
  const handleOlympiadOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setselectedOptionOlympiad(e.target.value);
  const [form, setForm] = useState<number>(1);
  const [selectedEducation, setSelectedEducation] = useState<ISelectItem | null>(null);;
  const handleNext = () => {
    if (form === 1 && selectedEducation?.value === education[0].value) {
      setForm(form => form + 2)
    } else {
      setForm(form => form + 1)
    }
  }
  const handlePrevious = () => {
    if (selectedEducation?.value === education[0].value) {
      setForm(form => form - 2);
    } else {
      setForm(form => form - 1)
    }
  }
  const handleEducationChange = (selectedOption: ISelectItem | null) => {
    setSelectedEducation(selectedOption);
  };

  const Form1 = () => (
    <>
      <Title text='Ümumi Suallar' />
      <div className='slider'>
        <div className="green green_first"></div>
      </div>
      <div className="full_name">
        <div className="name">
          <label htmlFor='name'>
            Ad*
          </label>
          <input type="text" id='name' {...register("step1.name", { required: true })} />
          {errors.step1?.name && form === 1 && <span className='error_msg'>Zəhmət olmasa,adınızı daxil edin..</span>}
        </div>
        <div className="surname">
          <label htmlFor='surname'>
            Soyad*
          </label>
          <input type="text" id='surname' {...register("step1.surname", { required: true })} />
          {errors.step1?.surname && form === 1 && <span className='error_msg'>Zəhmət olmasa,soyadınızı daxil edin..</span>}
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
        {errors.step1?.experience && <span className='error_msg'>Zəhmət olmasa,təcrübənizi daxil edin..</span>}
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
            {errors.step1?.hobby && form === 1 && <span className='error_msg'>Zəhmət olmasa,məşğuliyyətinizi daxil edin..</span>}
          </div>
          <div className="education">
            <Controller
              name="step1.education"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={education} label="Təhsiliniz?*" {...field} value={selectedEducation}
                onChange={(selectedOption: ISelectItem | null) => {
                  field.onChange(selectedOption);
                  handleEducationChange(selectedOption);
                }} />}
            />
            {errors.step1?.education && form === 1 && <span className='error_msg'>Zəhmət olmasa,təhsilinizi daxil edin..</span>}
          </div>

          <div className="level">
            <Controller
              name="step1.level"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={level} label="Aşağıdakılardan hansı sizə uyğundur?*" {...field} />}
            />
            {errors.step1?.level && form === 1 && <span className='error_msg'>Zəhmət olmasa,sizə uyğunu daxil edin..</span>}
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
              render={({ field }) => <CustomSelect options={education} label="Təhsiliniz?*" {...field} value={selectedEducation} onChange={(selectedOption: ISelectItem | null) => {
                field.onChange(selectedOption);
                handleEducationChange(selectedOption);
              }} />}
            />
            {errors.step1?.education && form === 1 && <span className='error_msg'>Zəhmət olmasa,təhsilinizi daxil edin..</span>}
          </div>

          <div className="level">
            <Controller
              name="step1.level"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={level} label="Aşağıdakılardan hansı sizə uyğundur?*"  {...field} />}
            />
            {errors.step1?.level && form === 1 && <span className='error_msg'>Zəhmət olmasa,sizə uyğunu daxil edin..</span>}
          </div>
        </>
      }
    </>

  )

  const Form2 = () => (
    <>
      <Title text='Orta, texniki və ali təhsil sualları' />
      <div className='slider'>
        <div className="green green_second"></div>
      </div>
      {selectedEducation?.value === education[1].value &&
        <div className="point">
          <label htmlFor='pointSchool'>
            Peşə təhsili üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointSchool' {...register("step2.school", { required: true })} placeholder='0-50' />
          {errors.step2?.school && form === 2 && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {(selectedEducation?.value === education[2].value ||selectedEducation?.value === education[3].value || selectedEducation?.value === education[4].value) &&
        <div className="point">
          <label htmlFor='pointBachelor'>
            Bakalavr pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointBachelor' {...register("step2.bachelor", { required: true })} placeholder='0-700' />
          {errors.step2?.bachelor && form === 2 && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {(selectedEducation?.value === education[3].value || selectedEducation?.value === education[4].value) &&
        <div className="point">
          <label htmlFor='pointMaster'>
            Magistratura pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointMaster' {...register("step2.master", { required: true })} placeholder='0-100' />
          {errors.step2?.master && form === 2 && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }
      {selectedEducation?.value === education[4].value &&
        <div className="point">
          <label htmlFor='pointDoctoral'>
            Doktorantura pilləsi üzrə TQDK qəbul balınızı qeyd edin*
          </label>
          <input type="text" id='pointDoctoral' {...register("step2.doctoral", { required: true })} placeholder='0-8' />
          {errors.step2?.doctoral && form === 2 && <span className='error_msg'>Zəhmət olmasa,balınızı daxil edin..</span>}
        </div>
      }

    </>
  )

  const Form3 = () => (
    <>
      <Title text='Olimpiada sualları' />
      <div className='slider'>
        <div className="green green_third"></div>
      </div>
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
        {errors.step3?.olympiad && <span className='error_msg'>Zəhmət olmasa,cavabınızı daxil edin..</span>}
      </div>
      {selectedOptionOlympiad === "Bəli" && form === 3 &&
        <>
          <div className="winner">
            <Controller
              name="step3.winner.value"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={subject} label="Olimpiyada qalibi olmusunuzmu?*" {...field} />}
            />
            {errors.step1?.education && form === 3 && <span className='error_msg'>Zəhmət olmasa,cavabınızı daxil edin..</span>}
          </div>
          <div className="level">
            <Controller
              name="step3.level.value"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={levelofWinner} label="Hansı fənn üzrə olimpiyada qalibi olmusunuz?*" {...field} />}
            />
            {errors.step1?.education && form === 3 && <span className='error_msg'>Zəhmət olmasa,fənni daxil edin..</span>}
          </div>
          <div className="place">
            <Controller
              name="step3.place"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <CustomSelect options={place} label="Neçənci yer əldə etmisiniz?" {...field} />}
            />
            {errors.step1?.education && form === 3 && <span className='error_msg'>Zəhmət olmasa,yerinizi daxil edin..</span>}
          </div>
        </>
      }
    </>
  )


  return (
    <section id="form">
      <div className="main_part">
        <div className="main_part_items">
          <img src={backgroundImg} alt="background rectangle" className='rectangle' />
          <div className="line line_short"></div>
          <div className="line line_long"></div>
        </div>
        <div className="text">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p> Suni intelekt sistemi </p>
          </div>
          <div className="summary">
            <span>
              Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən edə biləcəksiniz.
            </span>
          </div>
        </div>
        <div className="laptop_img">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className="form_part">
        <ul>
          <li>
            <button className='education'>1. Təhsil</button>
          </li>
          <li>
            <button>Dil Bilikləri</button>
          </li>
          <li>
            <button>Bacarıqlar</button>
          </li>
          <li>
            <button>İdman</button>
          </li>
          <li>
            <button>İş təcrübəsi</button>
          </li>
          <li>
            <button>Program</button>
          </li>
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          {form === 1 && Form1()}
          {form === 2 && Form2()}
          {form === 3 && Form3()}
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
      </div>
    </section>
  )
}

export default forwardRef(FormPage);
