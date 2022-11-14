import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Router } from '@angular/router';
import{AbstractControl,FormControl,FormGroup,Validators} from'@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User =new User();

  constructor(private registerService: RegisterService) { }

  register(){
  }
  ngOnInit(): void {
  }
  Register(){
    console.log(this.user);
  this.registerService.registerUser(this.user).subscribe(data=>{
    alert("registered successfully")
  })
  }
  userRegister(){
    console.log(this.user)
    this.Register()
  }
textpattern='^[a-zA-Z \-\']+'
numberpattern=/\-?\d*\.?\d{1,2}/
form1=new FormGroup({
  tid:new FormControl('',[Validators.required,Validators.maxLength(4)]),
  firstname:new FormControl('',[Validators.required,Validators.pattern(this.textpattern),Validators.maxLength(15)]),
  lastname:new FormControl('',[Validators.required,Validators.pattern(this.textpattern),Validators.maxLength(12)]),
  fplace:new FormControl('',[Validators.required,Validators.pattern(this.textpattern)]),
  age:new FormControl('',[Validators.required,Validators.pattern(this.numberpattern),Validators.max(90)]),
  nodv:new FormControl('',[Validators.required,Validators.pattern(this.numberpattern)]),


})
get f(){
  return this.form1.controls;
}

}
