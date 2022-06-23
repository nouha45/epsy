import React from 'react'
import "./sidbar.css"
import {LineStyle, Timeline, InsertInvitation, NotificationsActive, People, Report, AccountCircle, Assignment, Email, Message, Feedback} from "@material-ui/icons"
import {Link} from "react-router-dom";
export default function Sidbar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Home
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon"/>
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <AccountCircle className="sidebarIcon"/>
                  profile
                </li>
                
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
            <Link to="/patients"> <li className="sidebarListItem" >
            
                  <People className="sidebarIcon"/>
                  Patients
                </li></Link>
                <li className="sidebarListItem">
                  <InsertInvitation className="sidebarIcon"/>
                 My appointements
                </li>
                <li className="sidebarListItem">
                  <NotificationsActive className="sidebarIcon"/>
                 Invitations
                </li>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <Email className="sidebarIcon"/>
                  Email
                </li>
                <li className="sidebarListItem">
                  <Message className="sidebarIcon"/>
                  Message
                </li>
                <li className="sidebarListItem">
                  <Feedback className="sidebarIcon"/>
                  Feedback
                </li>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <Assignment className="sidebarIcon"/>
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon"/>
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon"/>
                  Reports
                </li>
                
            </ul>
        </div>
      </div>
      
    </div>
  )
}
