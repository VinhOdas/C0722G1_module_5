import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./component/common/customer/customer.component";
import {AddCustomerComponent} from "./component/common/customer/add-customer/add-customer.component";

const routes: Routes = [
  {path: 'customer/list', component: CustomerComponent},
  {path: 'customer/create', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
