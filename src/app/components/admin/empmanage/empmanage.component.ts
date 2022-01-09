import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeRatings } from './empmanageModel';

@Component({
  selector: 'app-empmanage',
  templateUrl: './empmanage.component.html',
  styleUrls: ['./empmanage.component.css']
})
export class EmpmanageComponent implements OnInit {
  
  employeeRatings:EmployeeRatings = new EmployeeRatings()

  constructor( private http:HttpClient) { }

  ngOnInit(): void {   
  }

  save() {   
    
    console.log(this.employeeRatings.department);
    const headers = { 'content-Type': 'application/json' };
    this.http.post<any>("http://localhost:9090/saveEmpRatings", JSON.stringify(this.employeeRatings), { headers: headers })
      .subscribe(data => {
        console.log(data);        
      }
      ) 
  }

}
