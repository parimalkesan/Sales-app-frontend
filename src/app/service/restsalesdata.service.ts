import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesRepModel } from '../model/SalesRepModel';

@Injectable({
  providedIn: 'root'
})
export class RestsalesdataService {

  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepdata"

  getSalesRepData(searchCriteria)
  {
    let headerOptions=new HttpHeaders().set('Access-Control-Allow-Origin','*');
    const params = new HttpParams({fromString: 'offset=0&limit=4&searchCriteria='+searchCriteria});
    return this.httpClient.get<SalesRepModel[]>(this.url,{ headers:headerOptions, params: params });
  }
}
