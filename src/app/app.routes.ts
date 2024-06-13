import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NgModel, NgModelGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormproductComponent } from './admin/formproduct/formproduct.component';
import { LoginComponent } from './admin/login/login.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'form', component:FormComponent},
    {path:'products',component:ProductlistComponent},
    {path:'products/:id',component:ProductdetailComponent},
    {path:'reactive',component:ReactiveformComponent},
    {path:'formproduct',component:FormproductComponent},
    {path:'login',component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
