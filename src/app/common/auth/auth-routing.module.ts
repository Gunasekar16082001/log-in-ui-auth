import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/common/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/common/auth/components/register/register.component';
import { AuthModule } from './auth.module';



const routes: Routes = [

//   // {
//   //   path: ': login',
//   //   component: LoginComponent,
//   //   loadChildren: () => AuthModule
//   }
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
