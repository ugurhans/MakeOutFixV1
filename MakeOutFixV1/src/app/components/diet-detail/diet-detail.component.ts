import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Days } from 'src/app/models/days';
import { DayService } from 'src/app/services/day.service';
import { Diet } from '../../models/diet';
import { DietDto } from '../../models/dietDto';
import { DietService } from '../../services/diet.service';
@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.scss'],
})
export class DietDetailComponent implements OnInit {
  constructor(private dietService: DietService,
    private activatedRoute:ActivatedRoute,
    private dayService: DayService) {}

  diet!: Diet;
  dietDto!: DietDto;
 days !:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        if (params['id']) {

          this.getDietById(params['id']);
        }
      });
  }

  getDietById(dietId:number) {
    this.dietService.getDietsById(dietId).subscribe((response) => {
      this.diet = response.data;
     this.days = response.data.days
      console.log(this.days)
      return this.days;
    });
  }

}
