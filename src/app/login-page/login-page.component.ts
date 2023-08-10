import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  version: string = "v1.0.0";
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.loginForm.value.username, Md5.hashStr((this.loginForm.value.password))).subscribe(response => {
      this.router.navigate(['/home']);
    }, err => {
      console.log(err.status);
      this.toastr.error('Mensagem de erro!', 'Título');
    });
  }
}
