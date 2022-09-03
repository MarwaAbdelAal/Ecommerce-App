import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/providers/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  errMsg: any = {}
  // baseUrl = "http://localhost:3000/"

  productForm:FormGroup = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
  });

  constructor(private _data:ProductService, private _router:Router) { }

  get title() {
    return this.productForm.get("title");
  }
  get desc() {
    return this.productForm.get("desc");
  }
  get price() {
    return this.productForm.get("price");
  }

ngOnInit(): void { }

handleProduct() {
    let productData: Product = this.productForm.value
    console.log(productData)
    this._data.addProduct(productData).subscribe(
        res=>{
            console.log(res)
        },
        e =>{
            if(e.error.message.includes("title")) this.errMsg.title = e.error.data.errors.title.message
            if(e.error.message.includes("desc")) this.errMsg.desc = e.error.data.errors.desc.message
            if(e.error.message.includes("price")) this.errMsg.price = e.error.data.errors.price.message
            console.log(e.error)
        },
        () => {
            this._router.navigateByUrl("product/myproducts")
        }
    )
}

}
