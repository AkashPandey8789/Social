import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  get username(){
    return this.form.get('username');
  }
  form=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  }
  );

  loginFunc(){
    console.log(this.form.value);
    if(this.form.value.username==="akash"){
        this.router.navigate(['home']);
    }
    else
    {
      this.form.setErrors({
        wrongCred:true
      })
      console.log(this.form.getError('wrongCred'));
      return;
    }
  }
}
