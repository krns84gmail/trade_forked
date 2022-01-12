import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment'
export default moment
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  date = new FormControl(new Date())
  change:boolean
  constructor(public newDataRef:MatDialogRef<AddformComponent>,
    @Inject(MAT_DIALOG_DATA) public formdata:any) {  }

  ngOnInit(): void {
    console.log('TRADDeeeee')
    this.change = false
  }

  onDataChange(newdate:any) {
    this.change = true
    // let selectedDate = new Date(newdate)
    // console.log("by default:", selectedDate)
    // console.log("by UTCString:", selectedDate.toUTCString())
    // var date = selectedDate.toUTCString()
    // console.log('date',date)
    // console.log('date',new Date(date).toLocaleString())
    // console.log("by LocaleString:", selectedDate.toLocaleString("en-AU"), {
    //   timeZone: 'America/New_York'})
     console.log(newdate)
    // const _ = moment()
    // const date = moment(newdate).add({hours: _.hour(), minutes:_.minute() , seconds:_.second()})
     this.formdata.trade_data_time = newdate
    // console.log(this.formdata.trade_data_time,{hours: _.hour(), minutes:_.minute() , seconds:_.second()})
  }

  cancel() {
    this.newDataRef.close()
  }
  save(){
    if(!this.change){
      this.formdata.trade_data_time = new Date()
      this.change = false
    }
  }
}
