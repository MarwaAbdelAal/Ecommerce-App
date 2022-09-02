import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    if(!this._auth.isLoggedin) this._router.navigateByUrl("/login")
    this.userLogout()
  }

  userLogout(){
    this._auth.logout().subscribe(
      res=>{
        localStorage.removeItem('g21Token');
        this._auth.isLoggedin = false
        this._auth.userData = null
      },
      err=>{
        console.log(err.error)
      },
      ()=>{
        this._router.navigateByUrl("/")
      }
    )

  }

}
