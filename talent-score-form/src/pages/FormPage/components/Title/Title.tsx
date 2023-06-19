import React from 'react'
import "../Title/Title.scss"
interface ITitle{
    text:string;
} 
const Title = (props:ITitle) => {
const {text}=props;
  return (
    <div>
          <label className='title'>{text}</label>
    </div>
  )
}

export default Title
