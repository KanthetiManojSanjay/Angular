import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return [
      {
        id: 4387,
        name: 'watch',
        brand: 'Timex',
        price: 7000,
        status :0
      },
      {
        id: 3877,
        name: 'mobile',
        brand: 'Oneplus',
        price: 35000,
        status :1
      },
      {
        id: 3780,
        name: 'T-shirt',
        brand: 'US POLO',
        price: 1699,
        status :0
      },
      {
        id: 5899,
        name: 'AC',
        brand: 'LG',
        price: 13000,
        status :2
      }

    ]
  }
}
