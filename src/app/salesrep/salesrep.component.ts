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
  loadData=false;
  dataLimit:number=10;
  openCreateForm=false;
  openEditForm=false;
  salesRepId=0;
  totalRecords:number;
  currPage:number=1;

  constructor(private rs:RestsalesdataService) { }

  getSearchCriteria(text)
  {
    if(text.value.length<3)
    {
      alert('Please enter atleast 3 characters')
    }
    else{
      this.searchText=text.value;
      this.getSalesData(this.searchText);
      this.loadData=true;
      this.currPage=1;
    }
  }

  loadCompleteData()
  {
    this.searchText="";
    this.getSalesData(this.searchText);
    this.loadData=false;
    this.currPage=1;
  }

  getLimit(limit)
  {
    this.dataLimit=limit.value;
    this.currPage=1;
  }

  showCreateForm()
  {
    this.openCreateForm=true;
  }

  addSalesData(salesRepData)
  {
    if(salesRepData.salesRepId==""||salesRepData.salesRepName==""
    ||salesRepData.country==""||salesRepData.city==""||salesRepData.pinCode==""||salesRepData.gender=="")
    {
      alert("A field cannot be blank")
    }
    
    else{
    this.rs.postSalesRepData(salesRepData).subscribe
    (
      (response)=>
      {
        alert("Data added")
        this.openCreateForm=false;
        this.getSalesData(this.searchText);
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
    }
  }

  showEditForm(editdata)
  {
    this.openEditForm=true;
    this.salesRepId=editdata.value;
  }

  editSalesData(salesRepData)
  {
    if(salesRepData.salesRepName==""
    ||salesRepData.country==""||salesRepData.city==""||salesRepData.pinCode==""||salesRepData.gender=="")
    {
      alert("A field cannot be blank")
    }
    
    else{
    this.rs.putSalesRepData(salesRepData).subscribe
    (
      (response)=>
      {
        alert("Data Edited")
        this.openEditForm=false;
        this.getSalesData(this.searchText);
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
    }

  }

  deleteRecord(deletedata)
  {
    this.rs.deleteSalesRepData(deletedata.value).subscribe
    (
      (response)=>
      {
        alert("Record deleted succesfully")
        this.getSalesData(this.searchText);
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }


  ngOnInit(): void {
    this.getSalesData(this.searchText);
  }

  getSalesData(searchText)
  {
    this.rs.getSalesRepData(searchText).subscribe
    (
      (response)=>
      {
        this.salesRepData=response;
        this.totalRecords=this.salesRepData.length;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }
}
