import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public signup = false
  public login = true
  constructor() { }

  ngOnInit(): void {
  }
  changeModal(){
    if(this.login==true){
      this.login=false;
      this.signup=true;
    }else{
      this.login=true;
      this.signup=false;
    }
  }
}
