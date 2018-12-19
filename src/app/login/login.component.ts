import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = [];

  constructor(private router: Router, private ngFlashMessageService: NgFlashMessageService) { }
  submitBtnClick(data){
    if(data.value.uname == 'admin' && data.value.pass == 'admin')
    {
      this.router.navigateByUrl('/avengers');
    }
    else
    {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Username or Password is incorrect"]
      });
    }
  }
  
  ngOnInit() {
  }
}
