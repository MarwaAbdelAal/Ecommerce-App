import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/providers/services/auth.service';
import { CategoryService } from 'src/app/providers/services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  errMsg: any = {}

  categoryForm:FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required])
  })

  constructor(private _category:CategoryService, private _router:Router, public _auth:AuthService) { }
  
  get name() {
    return this.categoryForm.get("name");
  }

  ngOnInit(): void {
  }

  handleCategory(){
    let data: Category = this.categoryForm.value
    console.log(data)
    this._category.addCategory(data).subscribe(
        res=>{
            console.log(res)
        },
        e =>{
            console.log(e.error)
            if(e.error.message.includes("name")) this.errMsg.name = e.error.data.errors.name.message
        },
        () => {
            this._router.navigateByUrl("category")
        }
    )
  }

}
