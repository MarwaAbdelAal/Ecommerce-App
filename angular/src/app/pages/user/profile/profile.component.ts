import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = []
  isLoaded: boolean= true
  errMsg: String = ""

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.getMyData()
  }

  getMyData(){
    this._auth.profile().subscribe(
      data=>{
        console.log(data.data)
        console.log("PROFILE")
        this.profile = JSON.stringify(data.data)
        console.log(this.profile)
      },
      e=>{
        this.errMsg=e.message
        // this.isLoaded=true
      },
      ()=>{
        // this.isLoaded=true //finish
      }
    )
  }


}
