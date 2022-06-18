import React, { Component } from 'react';
import DoctorService from '../services/DoctorService';

class ListDoctorCompenent extends Component {
  constructor(props){
    super(props)
    this.state={
        doctors :[]
    }
  }
  componentDidMount(){
    DoctorService.getDoctors().then((res)=>{

        this.setState({doctors: res.data});
    }
    );
  }
    render() {
        return (
            <div>
                <h2 className='text-center'>Doctors List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Tel</th>
                                <th>Cin</th>
                                <th>Password</th>
                                <th>Specialite</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.doctors.map(
                                    doctor =>
                                    <tr key={doctor.email}>
                                        <td>{doctor.nom}</td>
                                        <td>{doctor.prenom}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.tel}</td>
                                        <td>{doctor.password}</td>
                                        <td>{doctor.cin}</td>
                                        <td>{doctor.specialite}</td>

                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>


 

            </div>
        );
    }
}

export default ListDoctorCompenent;