import React from 'react'
import {useEffect, useState} from 'react'
import "./patientList.css"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import PatientService from '../../services/PatientService';
import axios from "axios"

export default function PatientList(){

  const [patients, setPatients]=useState([]);
const getPatientByDoctor = async () =>{
  axios.get("http://localhost:8080/patientof")
  .then((response => {
    setPatients(response.data.rows);
  })
  ).catch((e)=> console.log(e));
};



  
  useEffect(()=>{
    getPatientByDoctor();
  },[]);
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
       
        
        {
          field: 'email',
          headerName: 'Email',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 210,
         
        },
        {
          field: 'telephone',
          headerName: 'Telephone',
          type: 'number',
          width: 180,
        },

       

        {
          field: 'sexe',
          headerName: 'Sexe',
          width: 90,
         
        },
        {
          field: 'action',
          headerName: 'Action',
          type: 'number',
          width: 130,
          renderCell: (params)=>{
            return(
              <Link to={"/patientProfile/"+params.row.id}>
              <button className="ButtonpatientList">See More</button></Link>
            )
          }
        },
        
      ];

      const rows = {patients}    
      
  return (
    <div className='patientsList'>
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