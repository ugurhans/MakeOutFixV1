import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dietMethod } from '../models/dietMethod';
import { dietMethodDto } from '../models/dietMethodDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DietMethodService {
  apiUrl = 'https://localhost:5001/api/';
  constructor(  
    private httpClient: HttpClient,
    ) { }

    getDietMethods(): Observable<ListResponseModel<dietMethod>> {
      let newPath = this.apiUrl + 'dietMethods/getall';
      return this.httpClient.get<ListResponseModel<dietMethod>>(newPath);
    }
  
    getDietMethodsById(
      DietMethodId: number
    ): Observable<SingleResponseModel<dietMethod>> {
      let newPath =
        this.apiUrl +
        'DietMethods/getdietMethodbyid?dietMethodId=' +
        DietMethodId;
      return this.httpClient.get<SingleResponseModel<dietMethod>>(newPath);
    }
  
    getDietMethodsDto(): Observable<ListResponseModel<dietMethodDto>> {
      let newPath = this.apiUrl + 'DietMethods/getallDietMethodsdto';
      return this.httpClient.get<ListResponseModel<dietMethodDto>>(newPath);
    }
  
  
    add(dietMethod: dietMethod): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(
        this.apiUrl + 'DietMethods/addDietMethod',
        dietMethod
      );
    }
  
    delete(dietMethod: dietMethod): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(
        this.apiUrl + 'DietMethods/deleteDietMethod',
        dietMethod
      );
    }
  
    update(dietMethod: dietMethod): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(
        this.apiUrl + 'DietMethods/updateDietMethod',
        dietMethod
      );
    }
  
}
