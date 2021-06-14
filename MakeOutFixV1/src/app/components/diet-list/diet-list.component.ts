import { Component, OnInit } from '@angular/core';
import { Diet } from '../../models/diet';
import { DietDto } from '../../models/dietDto';
import { DietService } from '../../services/diet.service';

@Component({
  selector: 'app-diet-list',
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.scss'],
})
export class DietListComponent implements OnInit {
  constructor(private dietService: DietService) {}

  diet: Diet[];
  dietDto: DietDto[] = [];

  ngOnInit(): void {
    this.getAllDiets();
  }

  getAllDiets() {
    this.dietService.getDiets().subscribe((response) => {
      this.diet = response.data;
    });
  }
}
