import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
//   title = 'trade';  
//   tableData:any=[]
//   displayedColumns: string[] = ['trade_data_time','stock_name','listing_price','quantity','trade_type','price_per_unit','edit','delete','order']
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatTable) table: MatTable<any>
//   dataSource = new MatTableDataSource<any>([])
 
  constructor(){  }
  ngOnInit(){
    //new change from trade
    //new change2 from trade
//     this.getData()

  }
//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
    
//   }
//   compareObjects(o1: any, o2: any): boolean {
//     return o1.name === o2.name && o1._id === o2._id
// }

//   addNewData(){
//     const newDataRef = this.newEntry.open(AddformComponent,{
//       width:'300px',
//       data: {
//         trade_data_time:null,
//         stock_name:null,
//         listing_price:null,
//         quantity:null,
//         trade_type:null,
//         price_per_unit:null
//       }
//     })
//     newDataRef.afterClosed().subscribe(result => {
//       console.log('result==',result)
//       if(result) {
//         this.apiservice.insertData(result).then(
//           d=>{
//             console.log('postresponse',d)
//             this.getData()
//           },
//           error=>{console.log('error in post',error)}
//         )        
//       }
//     })
//   }
  
//   getData(){
//     // this.apiservice.getTableData()
//     // this.tableData = this.apiservice.sqlData
//     // console.log('sqldata',this.tableData)
//     this.apiservice.getTableData().then((response)=>{
//      console.log('response=',response)     
     
//       this.tableData = response
//      // this.tableData = [...this.tableData]
//       this.dataSource.data = this.tableData
   
//      if(this.tableData) {
//       this.tableData.map((obj:any)=>{
//       obj.isEditable = false
//      // console.log(obj.trade_data_time)
//       // const _ = moment()
//       // const date = moment( obj.trade_data_time).add({hours: _.hour(), minutes:_.minute() , seconds:_.second()})
//       // obj.trade_data_time = date.toDate()
//       //const changeDate = new Date(obj.trade_data_time)
// //    var strDate = obj.trade_data_time
// //    var my = new Date(strDate)
// // console.log("LocaleString:", obj.trade_data_time.toLocaleString("en-AU"), {
// //   timeZone: 'America/New_York'})


//   obj.trade_data_time = new Date(obj.trade_data_time)
  
//   obj.trade_data_time=moment(obj.trade_data_time).format('YYYY-MM-DD HH:mm:ss')+' GMT'
//   //console.log(obj.trade_data_time )
//   obj.trade_data_time=new Date(obj.trade_data_time).toLocaleString("en-GB",{year: 'numeric', month: 'numeric', day: 'numeric',hour12:true,hour: '2-digit', minute:'2-digit'})
  
//   //console.log(obj.trade_data_time )
 
//  // obj.trade_data_time = new Date(obj.trade_data_time).toLocaleString()
    
//       })
//     }
//     }, (error)=>{
//       console.log('GetErr=',error)
//     })

//   }
//   deleteRow(row:any){
//     console.log('row=',row)
//     this.apiservice.deleteTableData(row.id).subscribe(
//       response=>{
//       console.log('delete response',response)
//       this.getData()
//     },
//     error=>{
//       console.log('delete error',error)
//     }      
//       )
    
    
//   }
//   editData(row:any){
//    // console.log(row)
//     row.isEditable = true
    
//   }
//   cancelEdit(row:any){
//     row.isEditable = false
//     this.getData()
//    // this.tableData.ma
//   }
//   updateData(row:any){
//     row.isEditable = false
//     //console.log(row.trade_data_time)
//     this.apiservice.changeData(row).subscribe(response=>{
//       //console.log('Updated data',response)
//       this.getData()},
//       error=>{console.log('Update error',error)}
//       )    
//     //console.log('update',row)

//   }
//   addOrder(obj:any){
//     obj.order_status = 'created'
//     this.updateData(obj)
//     this.apiservice.insertOrder(obj).then(response=>{
//       console.log(response)
//     },
//     err=>{console.log(err)}
//     )
//   }
//   viewOrder(obj:any){

//   }
//   viewAllOrders(){
    
//   }
}
