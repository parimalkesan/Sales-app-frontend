import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesRepModel } from '../model/SalesRepModel';

@Injectable({
  providedIn: 'root'
})
export class RestsalesdataService {

  constructor(private httpClient:HttpClient) { }

  geturl:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepdata";
  deleteurl:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepdata/deletesalesrepdata";
  posturl:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepdata/postsalesrepdata";
  puturl:string="http://localhost:8080/Sales_App_war_exploded/webapi/salesrepdata/putsalesrepdata";

  getSalesRepData(searchCriteria)
  {
    const params = new HttpParams({fromString: 'searchCriteria='+searchCriteria});
    return this.httpClient.get<SalesRepModel[]>(this.geturl,{params: params });
  }

  deleteSalesRepData(id)
  {
    const params=new HttpParams({fromString:'id='+id});
    return this.httpClient.delete(this.deleteurl,{params:params});
  }

  postSalesRepData(salesRepModel:SalesRepModel)
  {
    return this.httpClient.post(this.posturl,salesRepModel);
  }

  putSalesRepData(salesRepModel:SalesRepModel)
  {
    return this.httpClient.put(this.puturl,salesRepModel);
  }
}
