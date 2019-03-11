import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './shared/services/employee.service';
import { Broadcaster } from './shared/services/boradcaster.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.employeeService.getEmployeeData();
    this.employeeService.loadEmployeeData.subscribe((employee: Employee) => {
        console.log('Subscribing call ' + employee);
    });

    // this.broadcaster.on('TEST').subscribe((data) => {
    //   console.log('Data ' + data);
    // });
  }
}
