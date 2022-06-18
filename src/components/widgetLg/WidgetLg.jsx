import React from 'react'
import "./widget.css"

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}> {type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Appointement</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgPatient">
            <img src="profil.jpeg" alt="" className="widgetLgImage" />
            <span className="widgetLgName"> nouhaila el fahsi</span></td>
            <td className="widgetLgDate"> 15 juin 2022</td>
            <td className="widgetLgStatus"> <Button type="Approved"/></td>

          
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgPatient">
            <img src="profil.jpeg" alt="" className="widgetLgImage" />
            <span className="widgetLgName"> nouhaila el fahsi</span></td>
            <td className="widgetLgDate"> 15 juin 2022</td>
            <td className="widgetLgStatus"> <Button type="Approved"/></td>

          
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgPatient">
            <img src="profil.jpeg" alt="" className="widgetLgImage" />
            <span className="widgetLgName"> nouhaila el fahsi</span> </td>
            <td className="widgetLgDate"> 15 juin 2022</td>
            <td className="widgetLgStatus"> <Button type="Declined"/></td>

          
        </tr>

      </table>
    </div>
  )
}