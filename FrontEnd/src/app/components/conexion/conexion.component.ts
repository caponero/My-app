import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient} from '@angular/common/http';
import { Form } from '@angular/forms';
import { prepareProfile } from 'selenium-webdriver/firefox';

declare var M: any;

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css'],
 })

export class ConexionComponent implements OnInit {

  product = new Product;
  temporal = [];
  products: Product[];
  URL_API : string = 'http://localhost:3000/products';

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getProduct()
  }

 /* resetForm(){
    this.product = new Product;
  }*/

  getProduct(){
    this.httpClient.get(this.URL_API)
    .subscribe (
      (data:any[]) => {
        this.products = data;
      }
    )
  }

addList(product: Product)
  {
    this.product = product;
    this.temporal.push(product);
    var pos = this.products.indexOf(product)
    console.log(pos);
    this.products.slice(pos, 1);
      
  }
  

 addProduct()
  {
    this.httpClient.post(this.URL_API, this.product)
       .subscribe((data:any) => {
         console.log(data);
         this.getProduct();
        });
    };
}
  
