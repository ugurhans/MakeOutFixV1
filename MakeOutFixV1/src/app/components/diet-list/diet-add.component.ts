import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.component.html',
  styleUrls: ['./diet-add.component.scss']
})
export class DietListComponent implements OnInit {
  diets!:Diet[];
  constructor(
    private dietService:DietService

  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dietService.getDiets().subscribe(response=>{
      this.diets = response.data;
    })
  }
}
