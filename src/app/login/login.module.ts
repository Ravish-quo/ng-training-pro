import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleComponent } from './login.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  exports: [SimpleComponent],
  providers: []
})
export class SimpleformModule { }
