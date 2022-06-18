import React from 'react'
import "./patientProfile.css"
import {PermIdentity, AlternateEmail, LocalPhone ,Wc , CalendarToday } from "@material-ui/icons" 

export default function PatientProfile() {
  return (
    <div className="patientProfile">
      <div className="patientTitleContainer">
        <h1 className="patientTitle">Patient's Profile</h1>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowTop">
            <img src="/profil.jpeg" alt=""  className="patientShowImg"/>

            <div className="patientShowTopTitle">
              <span className="patientShowUserName">Asmae Aloui</span>
              <span className="patientShowUserMaladie">Depression</span>
            </div>
          </div>
          <div className="patientShowBottom"><span className="patientShowTitle">Account Details</span>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">asmae alaoui</span>
          </div>
          <div className="patientShowInfo">
          <AlternateEmail className="patientShowIcon" />
          <span className="patientShowInfoTitle"> asmae.alaoui@gmail.com</span>
          </div>
          <div className="patientShowInfo">
          <LocalPhone className="patientShowIcon" />
          <span className="patientShowInfoTitle"> +212 6353467</span>
          </div>
          <div className="patientShowInfo">
          <CalendarToday className="patientShowIcon" />
          <span className="patientShowInfoTitle"> 27/11/2000</span>
          </div>
          <div className="patientShowInfo">
          <Wc className="patientShowIcon" />
          <span className="patientShowInfoTitle"> femme</span>
          </div>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle"> celibataire</span>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
