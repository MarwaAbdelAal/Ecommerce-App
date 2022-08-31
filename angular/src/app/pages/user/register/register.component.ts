import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/providers/services/data.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {

    // registerData:any = {}

    registerForm = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ]),
        email: new FormControl("", [Validators.email, Validators.required]),
        age: new FormControl("", [Validators.required, Validators.min(20), Validators.max(65)]),
        password: new FormControl("", [
            Validators.required,
            // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
        ]),
        gender: new FormControl("", [Validators.required]),
    });
    constructor(private _data:DataService) { }

    get name() {
        return this.registerForm.get("name");
    }
    get email() {
        return this.registerForm.get("email");
    }
    get age() {
        return this.registerForm.get("age");
    }
    get password() {
        return this.registerForm.get("password");
    }
    get gender() {
        return this.registerForm.get("gender");
    }

    ngOnInit(): void { }
    handleRegister() {
        if(this.registerForm.valid){
            console.log(this.registerForm.value)
            // this.registerData = this.registerForm.value
            this._data.register(this.registerForm.value)
        }
    }
}
