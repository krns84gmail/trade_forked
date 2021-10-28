import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  sqlData:any
  constructor(private http:HttpClient) { }

  async getTableData(){
    console.log('getdata')
    
    return await this.http.get('/api/allTrades/').toPromise()
    // .then(data =>{
    //   console.log('getdata',data)
    //   this.sqlData = data
    // })
}
getAllOrders(){
  return this.http.get('/api/allOrders/').toPromise()
}
selectOrder(id:any){
  console.log('order',id)
  return this.http.get('/api/Order/'+id).toPromise()
}
 deleteTableData(id:any){
  console.log('delete operation')
  return this.http.delete('/api/allTrades/'+id)
}
async insertData(data:any){
  console.log('insertpost=',data)  
  //return await this.http.post('/api/allTrades/',data).toPromise().then((response)=>console.log('response',response))
  return await this.http.post('/api/allTrades/',data).toPromise()

}
async insertOrder(data:any){ 
  let order = { 
    stock_name:data.stock_name,
    quantity:data.quantity,
    stock_type:data.trade_type,
    price_per_unit:data.price_per_unit, 
    status:data.order_status, 
    trade_id:data.id 
}
  return await this.http.post('/api/allOrders/',order).toPromise()

}
changeData(data:any){  
  let updatedData = {    
      trade_data_time:data.trade_data_time,
      stock_name:data.stock_name,
      listing_price:data.listing_price,
      quantity:data.quantity,
      trade_type:data.trade_type,
      price_per_unit:data.price_per_unit, 
      order_status:data.order_status  
  }
  console.log('updata',updatedData)
  return this.http.put('/api/allTrades/'+data.id,updatedData)
}
}
