import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/models/patient';
import { PatientDto } from 'src/app/models/patientDto';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patinet-list',
  templateUrl: './patinet-list.component.html',
  styleUrls: ['./patinet-list.component.scss'],
})
export class PatinetListComponent implements OnInit {
  patients: Patient[] = [];
  patientsDto: PatientDto[] = [];

  constructor(
    private toastrService: ToastrService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {}

  getAllPatients() {
    this.patientService.getPatients().subscribe((response) => {
      this.patients = response.data;
      this.toastrService.success('Hastalar Başarıyla Listelendi');
    });
  }

  getAllPatientsDto() {
    this.patientService.getPatientsDto().subscribe((response) => {
      this.patientsDto = response.data;
      this.toastrService.success('Hastalar Başarıyla Listelendi');
    });
  }
}
