import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dietMethod } from 'src/app/models/dietMethod';
import { dietMethodDto } from 'src/app/models/dietMethodDto';
import { DietMethodService } from 'src/app/services/diet-method.service';

@Component({
  selector: 'app-diet-method',
  templateUrl: './diet-method.component.html',
  styleUrls: ['./diet-method.component.scss']
})
export class DietMethodComponent implements OnInit {
  dietMethods!:dietMethod[];
  methodAddForm!:FormGroup
  constructor(
    private dietMethodService:DietMethodService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dietMethodService.getDietMethods().subscribe(response=>{
      this.dietMethods = response.data;
    })
  }
  createForm() {
    this.methodAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    })
  }
  add(){
    if (this.methodAddForm.valid) {
      let dietModel = Object.assign({}, this.methodAddForm.value);
      this.dietMethodService.add(dietModel).subscribe(response=>{
        
      })
    }
  }
}
