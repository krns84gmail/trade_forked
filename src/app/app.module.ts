import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddformComponent } from './addform/addform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderComponent } from './order/order.component';
import { TradeComponent } from './trade/trade.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    OrderComponent,
    TradeComponent,
    SingleorderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-EN' },
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
