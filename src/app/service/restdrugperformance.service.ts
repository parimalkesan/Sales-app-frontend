import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrugModel } from '../model/DrugModel';
@Injectable({
  providedIn: 'root'
})
export class RestdrugperformaceService {

  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:8080/Sales_App_war_exploded/webapi/drugsalesdata";

  getDrugPerformanceData(city) {
    let headerOptions=new HttpHeaders().set('Access-Control-Allow-Origin','*');
    const params = new HttpParams({fromString: 'city='+city});
    return this.httpClient.get<DrugModel[]>(this.url,{ headers:headerOptions, params: params });
  }
}
