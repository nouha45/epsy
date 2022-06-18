import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle"> New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="profil.jpeg" alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">Nouhaila elfahsi</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' />
    Display
</button>
            </li>
            <li className="widgetSmListItem">
                <img src="profil.jpeg" alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">Nouhaila elfahsi</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' />
    Display
</button>
            </li>
            <li className="widgetSmListItem">
                <img src="profil.jpeg" alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">Nouhaila elfahsi</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' />
    Display 
</button>
            </li>
            <li className="widgetSmListItem">
                <img src="profil.jpeg" alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">Nouhaila elfahsi</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' /> 
    Display
</button>
            </li>
        </ul>
    </div>
  )
}
