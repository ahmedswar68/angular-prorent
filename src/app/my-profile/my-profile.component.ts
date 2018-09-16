import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userData:{};
  constructor(private auth:AuthService) {
    this.auth.userDeatils()
    .subscribe(
      res=>this.userData=res.result,
      // res=>console.log(res.result),
      err=>console.log(err)            
    )
  }

  ngOnInit() {
  }

}
