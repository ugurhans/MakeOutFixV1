import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patient!: Patient;
  constructor(
    private patientSerive:PatientService,
    private toastrService:ToastrService,

  ) { }

  ngOnInit(): void {
  }

  getPatientById(userId:number){
    this.patientSerive.getPatientsById(userId).subscribe((response) => {
      this.patient = response.data;
    });
  }

  getPatientDtoById(userId:number){
    this.patientSerive.getPatientsDtoById(userId).subscribe((response) => {
      this.patient = response.data;
    });
  }
}
