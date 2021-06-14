import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diet } from '../models/diet';
import { DietDto } from '../models/dietDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) {}

  getDiets(): Observable<ListResponseModel<Diet>> {
    let newPath = this.apiUrl + 'diets/getall';
    return this.httpClient.get<ListResponseModel<Diet>>(newPath);
  }

  getDietsById(dietId: number): Observable<SingleResponseModel<Diet>> {
    let newPath = this.apiUrl + 'Diets/getbyid?dietId=' + dietId;
    return this.httpClient.get<SingleResponseModel<Diet>>(newPath);
  }

  getDietsDto(): Observable<ListResponseModel<DietDto>> {
    let newPath = this.apiUrl + 'Diets/getallDietsdto';
    return this.httpClient.get<ListResponseModel<DietDto>>(newPath);
  }

  getDietByUserId() {
    let newPath = this.apiUrl + 'Diets/getDietByUserId';
    return this.httpClient.get<ListResponseModel<DietDto>>(newPath);
  }

  add(diet: Diet): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Diets/addDiet',
      diet
    );
  }

  delete(diet: Diet): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Diets/deleteDiet',
      diet
    );
  }

  update(diet: Diet): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Diets/updateDiet',
      diet
    );
  }
}
