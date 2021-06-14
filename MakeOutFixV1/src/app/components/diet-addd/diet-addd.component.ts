import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.component.html',
  styleUrls: ['./diet-add.component.scss']
})
export class DietAdddComponent implements OnInit {
  dietAddForm!:FormGroup;
  constructor(
    private dietService:DietService ,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createDietForm();
  }
  createDietForm() {
    this.dietAddForm = this.formBuilder.group({
      name:["",Validators.required],
    }) 
  }

  addDiet(){
    if (this.dietAddForm.valid) {
      let dietModel = Object.assign({},this.dietAddForm.value);
      console.log(dietModel);
    }
  }


}