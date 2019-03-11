import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { EmployeeService } from './shared/services/employee.service';
import { Broadcaster } from './shared/services/boradcaster.service';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

const appRoutes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: '', redirectTo: 'EmployeesComponent', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Broadcaster,
    DataService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
