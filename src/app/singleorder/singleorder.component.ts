import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singleorder',
  templateUrl: './singleorder.component.html',
  styleUrls: ['./singleorder.component.scss']
})
export class SingleorderComponent implements OnInit {
  tableData:any

  constructor(private apiservice:ApiServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id
    this.apiservice.selectOrder(id).then(response=>{
      console.log(response)
      this.tableData = response
      console.log(this.tableData[0].stock_name)
    })
  }

}
