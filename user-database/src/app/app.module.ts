import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router"
import { AppComponent } from './app.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import {UserService} from "./user.service";
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    UserUpdateComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
