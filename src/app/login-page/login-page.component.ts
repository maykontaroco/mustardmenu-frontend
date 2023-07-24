import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  version: string = "v1.0.0";
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.loginForm.value.username, Md5.hashStr((this.loginForm.value.password))).subscribe(response => {
      console.log('response -----> ', response.status);
    }, err => {
      console.log(err.status);
    });
  }
}
