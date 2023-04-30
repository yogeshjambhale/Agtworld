import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public leavegroup = false
  public joingroup = true
  public groups = false
  public unfollow = false
  public follow = true
 
  constructor() { }

  ngOnInit(): void {
  }
  changebutton(){
    if(this.joingroup==true){
      this.joingroup=false;
      this.leavegroup=true;
      this.groups=true;
    }else{
      this.joingroup=true;
      this.leavegroup=false;
      this.groups=false;
    }
  }
  hideShow(){
     if(this.follow=true){
      this.follow=false;
      this.unfollow=true;
     }else{
      this.follow=true;
      this.unfollow=false;
     }
  }
}
