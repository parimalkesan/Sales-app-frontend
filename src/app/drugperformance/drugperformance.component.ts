import { Component, OnInit } from '@angular/core';
import { DrugModel } from '../model/DrugModel';
import { RestdrugperformaceService } from '../service/restdrugperformance.service';

@Component({
  selector: 'app-drugperformance',
  templateUrl: './drugperformance.component.html',
  styleUrls: ['./drugperformance.component.css']
})
export class DrugperformanceComponent implements OnInit {

  constructor(private rs:RestdrugperformaceService) { }

  selectedCity='Delhi';
  drugPerformanceData:DrugModel[]=[];

  getCity(city)
  {
    this.selectedCity=city.value;
    this.rs.getDrugPerformanceData(this.selectedCity).subscribe
    (
      (response)=>
      {
        this.drugPerformanceData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }

  ngOnInit(): void {
    this.rs.getDrugPerformanceData(this.selectedCity).subscribe
    (
      (response)=>
      {
        this.drugPerformanceData=response;
      },
      (error)=>
      {
        console.log("error occured"+error);
      }
    )
  }

}
