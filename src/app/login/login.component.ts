import { Component, inject } from '@angular/core';
import { loginService } from './login.component.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from "rxjs";
import * as loginStrings from "../stringFile/login.json";
import { commonFunctionService } from "../utils/commonFunction";
declare var customToastr: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,  // Ensure this is a standalone component
  imports: [FormsModule], 
  // imports: [CommonModule], 
  // Import CommonModule
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // username: string = '';
  // email: string ='';
  // imagepath: string ='../../assets/img/background.png';
  // password: string = '';
  // errorMessage: string = '';
  // loginStrings: any = loginStrings;
  // constructor(private loginService: loginService, 
  //   private commonFunction: commonFunctionService,
  //    private router: Router) {
      loginObj : any ={
        "EmailId" :" ",
        "Password" :" "
      };
      http = inject(HttpClient);
      constructor(private router: Router){

      }
      onLogin(){
        console.log("calling");

        debugger;
        this.http.post("http://localhost:4000/api/v1/login/clublogin" ,this.loginObj).subscribe((res : any)=>{
          debugger;
          console.log("start");

          if(res.result){
            alert("login success");
            console.log("hii");
            this.router.navigateByUrl("dashboard")
          }
          else{
            alert("Check User name or password")
            console.log("bye");

          }
        })
      }
  }



  
  
  //  validateEmail(email) {
  //   // Define the regular expression pattern for validating an email
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //   // Test the email against the pattern
  //   return emailPattern.test(email);
  // }
//   emailinput(value : string):void {
//     this.email=value;
// console.log(value)
//   }


