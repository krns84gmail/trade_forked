import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { TradeComponent } from './trade/trade.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
const routes: Routes = [
  { 
    path: '', component: TradeComponent
  },
  { 
    path: 'all_orders', component: OrderComponent
  },
  { 
    path: 'order/:id', component: SingleorderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
