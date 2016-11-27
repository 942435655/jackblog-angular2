import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from '../Shared'

import LoginComponent  from './login.component'

@NgModule({
  imports: [ CommonModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule,SharedModule ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}