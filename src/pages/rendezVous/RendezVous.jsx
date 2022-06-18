import React from 'react'
import "./rendezVous.css"

import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";

export default function RendezVous() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'patient', headerName: 'patient', width:200, renderCell:(params)=>{
      return(
        <div className="patientsLists">
        <img src={params.row.avatar} alt="" className="patientListImage" />
        {params.row.patientName}
        </div>
      )
    } },
   
    { field: 'date', headerName: 'Date', width: 100 },
   
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'number',
      width: 200,
      renderCell: (params)=>{
        return(<div className="actionsButtons">
          <Link to={"/patientProfile/"+params.row.id}>
          <button className="acceptButton">Accept</button></Link>
          <button className="refuseButton">Refuse</button>

          </div>
        )
      }
    },
    
  ];
  





  const rows = [
    { id: 1,
       patientName: 'nouhaila elfahsi',
        avatar: "/profil.jpeg", 
      date:"30/06/2022" },
      { id: 2,
        patientName: 'nouhaila elfahsi',
         avatar: "/profil.jpeg", 
         date:"30/06/2022" },
       { id: 3,
        patientName: 'nouhaila elfahsi',
         avatar: "/profil.jpeg", 
         date:"30/06/2022" },
       { id: 4,
        patientName: 'nouhaila elfahsi',
         avatar: "/profil.jpeg", 
         date:"30/06/2022" },
       { id: 5,
        patientName: 'nouhaila elfahsi',
         avatar: "/profil.jpeg", 
         date:"30/06/2022" 
      },
  
  ];
  return (
    <div className="rendezVousList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}
