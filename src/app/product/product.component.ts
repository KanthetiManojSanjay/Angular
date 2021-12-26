import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  message: string = 'weLcome To anGulaR';
  amount: number = 500;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
