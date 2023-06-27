import React from 'react'
import backgroundImg from "../images/Rectangle 24.png";
import logo from "../images/Group.png";
import laptop from "../images/Frame.png";
import experience from '../images/74424-worker-have-an-idea.png';
import './LeftPart.scss'
import { useLocation } from 'react-router-dom';

const LeftPart = () => {
    const location=useLocation();

    const imageSetter=()=>{
        switch(location.pathname){
            case '/education-stage':
                return <img src={laptop} alt="main" />
            case '/job-experience-stage':
                return <img src={experience} alt="main" />
           default :
            return <img src={laptop} alt="main" />
        }
    }
   

  return (
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
    <div className="main_img">
       {imageSetter()}
    </div>
</div>
  )
}

export default LeftPart
