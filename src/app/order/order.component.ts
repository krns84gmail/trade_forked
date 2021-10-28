import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import {MatPaginator} from '@angular/material/paginator';
import { MatTable } from "@angular/material/table";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  tableData:any=[]
  displayedColumns: string[] = ['stock_name','quantity','stock_type','price_per_unit','status']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>
 
 
  constructor(private apiservice:ApiServiceService){  }

  ngOnInit(): void {
    this.apiservice.getAllOrders().then(response=>{
      this.tableData = response     
    },
    err=>{console.log(err)}
    )
  }

}
