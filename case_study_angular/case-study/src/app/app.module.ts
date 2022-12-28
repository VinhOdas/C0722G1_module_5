import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { NavigationComponent } from './component/common/navigation/navigation.component';
import { CustomerComponent } from './component/common/customer/customer.component';
import { EmployeeComponent } from './component/common/employee/employee.component';
import { FacilityComponent } from './component/common/facility/facility.component';
import { ContractComponent } from './component/common/contract/contract.component';
import { AddFacilityComponent } from './component/common/facility/add-facility/add-facility.component';
import { EditFacilityComponent } from './component/common/facility/edit-facility/edit-facility.component';
import { AddCustomerComponent } from './component/common/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/common/customer/edit-customer/edit-customer.component';
import { AddContractComponent } from './component/common/contract/add-contract/add-contract.component';
import { HomeComponent } from './component/common/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

function AddComponent() {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CustomerComponent,
    EmployeeComponent,
    FacilityComponent,
    ContractComponent,
    AddFacilityComponent,
    EditFacilityComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AddContractComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
