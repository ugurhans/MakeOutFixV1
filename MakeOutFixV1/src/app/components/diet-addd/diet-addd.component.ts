import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.component.html',
  styleUrls: ['./diet-add.component.scss']
})
export class DietAdddComponent implements OnInit {
  dietAddForm!: FormGroup;
  constructor(
    private dietService: DietService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createDietForm();
  }
  createDietForm() {
    this.dietAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      dietMethodId: ["", Validators.required],
      weekDay: ["", Validators.required],
      breakfast: ["", Validators.required],
      firstSnack: ["", Validators.required],
      launch: ["", Validators.required],
      secondSnack: ["", Validators.required],
      dinner: ["", Validators.required],
      lastSnack: ["", Validators.required],
      dailyTotal: ["", Validators.required],
      recommended: ["", Validators.required],
    })
  }

  addDiet() {
    if (this.dietAddForm.valid) {
      let dietModel = Object.assign({}, this.dietAddForm.value);
      dietModel = {
        name:this.dietAddForm.value.name,
        dietMethodId:this.dietAddForm.value.dietMethodId,
          days:[{
            weekDay:this.dietAddForm.value.weekDay,
            breakfast:this.dietAddForm.value.breakfast,
            firstSnack:this.dietAddForm.value.firstSnack,
            launch:this.dietAddForm.value.launch,
            secondSnack:this.dietAddForm.value.secondSnack,
            dinner:this.dietAddForm.value.dinner,
            lastSnack:this.dietAddForm.value.lastSnack,
            dailyTotal:this.dietAddForm.value.dailyTotal,
            recommended:this.dietAddForm.value.recommended,
          }]
        
       
      }
      this.dietService.add(dietModel).subscribe(response => {
        console.log(dietModel);
     })
    }
  }

}