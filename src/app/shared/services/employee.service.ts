import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/employee';
import { Broadcaster } from './boradcaster.service';

@Injectable()
export class EmployeeService {
    private employeeData = new BehaviorSubject<any>('Test');

    constructor(private dataService: DataService, private broadcaster: Broadcaster) {}

    get loadEmployeeData() {
      return this.employeeData.asObservable();
    }

    getEmployeeData() {
      this.dataService.getRequest().subscribe( (employee: Employee) => {
        console.log('Subscribing call ' + employee[0].firstName);
        this.employeeData.next(employee);
        // this.broadcaster.broadcast('TEST', employee);
      });
    }

}
