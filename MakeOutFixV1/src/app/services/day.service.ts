import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Days } from '../models/days';
import { DaysDto } from '../models/daysDto';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  apiUrl = 'https://localhost:44380/api/'; //Api url değişkendir !
  

  getDays(): Observable<ListResponseModel<Days>> {
    let newPath = this.apiUrl + 'days/getall';
    return this.httpClient.get<ListResponseModel<Days>>(newPath);
  }

  getDaysById(DayId: number): Observable<SingleResponseModel<Days>> {
    let newPath = this.apiUrl + 'days/getdaybyid?dayId=' + DayId;
    return this.httpClient.get<SingleResponseModel<Days>>(newPath);
  }

  getDaysDto(): Observable<ListResponseModel<DaysDto>> {
    let newPath = this.apiUrl + 'days/getalldaysdto';
    return this.httpClient.get<ListResponseModel<DaysDto>>(newPath);
  }

  getDaysUnVerified(): Observable<ListResponseModel<Days>> {
    let newPath = this.apiUrl + 'days/getalldaysunverified';
    return this.httpClient.get<ListResponseModel<Days>>(newPath);
  }

  getDaysDtoUnVerified(): Observable<ListResponseModel<DaysDto>> {
    let newPath = this.apiUrl + 'days/getalldaydtounverified';
    return this.httpClient.get<ListResponseModel<DaysDto>>(newPath);
  }

  getDaysVerified(): Observable<ListResponseModel<Days>> {
    let newPath = this.apiUrl + 'days/getalldaysverified';
    return this.httpClient.get<ListResponseModel<Days>>(newPath);
  }

  getDaysDtoVerified(): Observable<ListResponseModel<DaysDto>> {
    let newPath = this.apiUrl + 'days/getalldaydtoverified';
    return this.httpClient.get<ListResponseModel<DaysDto>>(newPath);
  }

  add(days: Days): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'days/addDay',
      days
    );
  }

  delete(days: Days): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'days/deleteday',
      days
    );
  }

  update(days: Days): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'days/updateday',
      days
    );
  }

  verifyDays(days: Days) {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'days/verifyDay',
      days
    );
  }
}
