import React from 'react'
import "./featuredInfo.css"
import {ArrowUpward, ArrowDownward} from '@material-ui/icons'

export default function () {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Patients</span>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>1,789</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Appointements</span>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>1,789</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Invitations</span>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>56</span>
                <span className="featuredPatientRate">
                    
                -13<ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
        </div>
    </div>
  )
}
