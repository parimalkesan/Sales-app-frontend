import { Component, OnInit } from '@angular/core';
import { RestsalesperformanceService } from '../service/restsalesperformance.service';
import { SalesRepPerformanceModel } from '../model/SalesRepPerformanceModel';

@Component({
  selector: 'app-salesrepperformance',
  templateUrl: './salesrepperformance.component.html',
  styleUrls: ['./salesrepperformance.component.css']
})
export class SalesrepperformanceComponent implements OnInit {
  selectedProduct='Solvin cold'
  selectedMonth=1
  salesRepPerformanceData:SalesRepPerformanceModel[]=[];

  constructor(private rs:RestsalesperformanceService) { }

  getMonth(month)
  {
    this.selectedMonth=month.value;
    this.rs.getSalesRepPerformanceData(this.selectedProduct,this.selectedMonth).subscribe
    (
      (response)=>
      {
        this.salesRepPerformanceData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }

  getProduct(product)
  {
    this.selectedProduct=product.value;
    this.rs.getSalesRepPerformanceData(this.selectedProduct,this.selectedMonth).subscribe
    (
      (response)=>
      {
        this.salesRepPerformanceData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }
  ngOnInit(): void {
    this.rs.getSalesRepPerformanceData(this.selectedProduct,this.selectedMonth).subscribe
    (
      (response)=>
      {
        this.salesRepPerformanceData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }

}
