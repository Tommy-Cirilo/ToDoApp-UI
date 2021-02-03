import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //instance of a router
  // angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);

    if(this.username==="tommy" && this.password === "dummy") {
      //this creates the navigation route for this logical if statement
      this.router.navigate(['welcome', this.username]);


      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}