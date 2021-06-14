import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DietMethodService } from 'src/app/services/diet-method.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-add-diet-method',
  templateUrl: './add-diet-method.component.html',
  styleUrls: ['./add-diet-method.component.scss']
})
export class AddDietMethodComponent implements OnInit {
  dietMethodAddForm!:FormGroup;


  constructor(
    private dietMethodService:DietMethodService,
    private toastrService:ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  createDietMethodForm() {
    this.dietMethodAddForm = this.formBuilder.group({
      name:["",Validators.required],
    }) 
  }
  addDietMethod(){
    if (this.dietMethodAddForm.valid) {
      let dietModel = Object.assign({},this.dietMethodAddForm.value);
      this.dietMethodService.add(dietModel).subscribe(response=>{
        
      })
    }
  }

}
