import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { SalesRepPerformanceModel } from '../model/SalesRepPerformanceModel';

@Injectable({
  providedIn: 'root'
})
export class RestsalesperformanceService {

  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepperformancedata";

  getSalesRepPerformanceData(product,month) {
    const params = new HttpParams({fromString: 'product='+product+'&month='+month});
    return this.httpClient.get<SalesRepPerformanceModel[]>(this.url,{ params: params });
  }
}
