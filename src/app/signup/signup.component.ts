import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
