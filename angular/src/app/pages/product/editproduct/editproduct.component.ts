import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/providers/services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  errMsg: any = {};

// baseUrl = "http://localhost:3000/"

  editForm:FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    desc: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
  });

  constructor(private _data:ProductService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  get title() {
  return this.editForm.get("title");
  }
  get desc() {
  return this.editForm.get("desc");
  }
  get price() {
  return this.editForm.get("price");
  }
  ngOnInit(): void {
    //////////////////////// THERE IS A BUG HERE /////////////////////////////
      if(this._data.productData) this.editForm.patchValue(this._data.productData)
      else this._router.navigateByUrl("product/add")
  }

  handleEdit(){
      if(this._data.productData){
        this._data.editProduct(this._data.productData?.["_id"], this.editForm.value)
        .subscribe(
          (res) => {
              console.log(res);
          },
          (e) => {
              if (e.error.message.includes("title")) this.errMsg.title = e.error.data.errors.title.message;
              if (e.error.message.includes("desc")) this.errMsg.desc = e.error.data.errors.desc.message;
              if (e.error.message.includes("price")) this.errMsg.price = e.error.data.errors.price.message;
              console.log(e.error);
          },
          () => {
              this._router.navigateByUrl("product")
          }
          )
      }
  }

}
