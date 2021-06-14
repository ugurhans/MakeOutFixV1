import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Patient } from '../models/patient';
import { PatientDto } from '../models/patientDto';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  
  apiUrl = 'https://localhost:44380/api/';

  constructor(
    private httpClient: HttpClient

  ) { }
  getPatients(): Observable<ListResponseModel<Patient>> {
    let newPath = this.apiUrl + 'patients/getall';
    return this.httpClient.get<ListResponseModel<Patient>>(newPath);
  }

  getPatientsById(patientId: number): Observable<SingleResponseModel<Patient>> {
    let newPath =
      this.apiUrl + 'patients/getpatientbyid?patientId=' + patientId;
    return this.httpClient.get<SingleResponseModel<Patient>>(newPath);
  }

  getPatientsDtoById(patientId: number) {
    let newPath =
    this.apiUrl + 'patients/getpatientbyid?patientId=' + patientId;
  return this.httpClient.get<SingleResponseModel<Patient>>(newPath);
  }

  getPatientsDto(): Observable<ListResponseModel<PatientDto>> {
    let newPath = this.apiUrl + 'patients/getallpatientsdto';
    return this.httpClient.get<ListResponseModel<PatientDto>>(newPath);
  }
  

  add(patient: Patient): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'patients/addpatient',
      patient
    );
  }

  delete(patient: Patient): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'patients/deletepatient',
      patient
    );
  }

  update(patient: Patient): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'patients/updatepatient',
      patient
    );
  }

  
}
