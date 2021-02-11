import { Component, OnInit } from '@angular/core';
import { RestsalesdataService } from '../service/restsalesdata.service';
import { SalesRepModel } from '../model/SalesRepModel';

@Component({
  selector: 'app-salesrep',
  templateUrl: './salesrep.component.html',
  styleUrls: ['./salesrep.component.css']
})
export class SalesrepComponent implements OnInit {
  headers = ["Id", "Name", "Country", "City", "Zipcode","Gender"];
  index=["salesRepId","salesRepName","country","city","pinCode","gender"];
  salesRepData:SalesRepModel[]=[];
  searchText="";

  constructor(private rs:RestsalesdataService) { }

  getSearchCriteria(text)
  {
    if(text.value.length<3)
    {
      alert('Please enter atleast 3 characters')
    }
    else{
      this.searchText=text.value;
      this.rs.getSalesRepData(this.searchText).subscribe
      (
        (response)=>
      {
        this.salesRepData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
      )
      
    }
  }

  ngOnInit(): void {
    this.rs.getSalesRepData(this.searchText).subscribe
    (
      (response)=>
      {
        this.salesRepData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }
}
