import axios from "axios"

const PATIENT_API_BASE_URL="http://localhost:8080/patientof";

class PatientService{

    getpatientsByDoctor(){
        return axios.get(PATIENT_API_BASE_URL);
    }
}
export default new PatientService()