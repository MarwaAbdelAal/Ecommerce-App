import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/providers/services/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {

    errMsg = ""

    registerForm = new FormGroup({
        name: new FormControl("marwa", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ]),
        email: new FormControl("", [Validators.email, Validators.required]),
        age: new FormControl(0, [Validators.required, Validators.min(20), Validators.max(65)]),
        password: new FormControl("", [
            Validators.required,
            // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
        ]),
        gender: new FormControl("", [Validators.required]),
    });
    constructor(private _auth:AuthService) { }

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
        // let x:User = {name: '', email: '', age: "", password: '', gender: ''}
        let userData: any =this.registerForm.value
        
        console.log(userData)
        // this._auth.register(userData).subscribe(
            // res=>{
// 
            // },
            // e =>{
// 
            // },
            // () => {}
        // )

}
}
