import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router ) { }

  userName:string='';
  password:string='';
  errorMessage:string='Invalid login';
  invalidLogin:boolean=false;

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.userName);
    if(this.userName==='abcd' || this.password==='abcd')
      this.invalidLogin=true;
    else
      this.router.navigate(['welcome',this.userName]);
  }

}
