import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DietMethodService } from 'src/app/services/diet-method.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-add-diet-method',
  templateUrl: './add-diet-method.component.html',
  styleUrls: ['./add-diet-method.component.scss']
})
export class AddDietMethodComponent implements OnInit {

  constructor(
    private dietMethodService:DietMethodService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  getDietMethods(){
    
  }

}
