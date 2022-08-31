import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required,]),
});
constructor(private _data:DataService) { }

get email() {
    return this.loginForm.get("email");
}

get password() {
    return this.loginForm.get("password");
}

ngOnInit(): void { }
handleLogin() {
    if(this.loginForm.valid){
        console.log(this.loginForm.value)
        // this.registerData = this.loginForm.value
        this._data.login(this.loginForm.value)
    }
}
}
