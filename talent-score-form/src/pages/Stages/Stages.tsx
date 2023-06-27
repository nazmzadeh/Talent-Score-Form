import React  from 'react'
import './Stages.scss'
import { useLocation } from 'react-router-dom';

const Stages = () => {
    const location = useLocation();

    return (
        <ul>
            <li>
                <button className={`${(location.pathname === '/education-stage' || location.pathname === '/' ) && 'active'} stage`}>Təhsil</button>
            </li>
            <li>
                <button  className={`${location.pathname === '/language-stage' && 'active'} stage`} > Dil Bilikləri</button>
            </li>
            <li>
                <button  className={`${location.pathname === '/skills-stage' && 'active'} stage`} > Bacarıqlar</button>
            </li>
            <li>
                <button  className={`${location.pathname === '/sport-stage' && 'active'} stage`}> İdman</button>
            </li>
            <li>
                <button  className={`${location.pathname === '/job-experience-stage' && 'active'} stage`}> İş təcrübəsi</button>
            </li>
            <li>
                <button  className={`${location.pathname === '/program-stage' && 'active'} stage`}> Program</button>
            </li>
        </ul>
    )
}

export default Stages
