import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    let objLogin = this.loginForm.value;
    this.loginService.autenticar(objLogin).subscribe(
      {
        next: (response) => {
          console.log(response)
          this.router.navigateByUrl('/');
          this.loginForm.reset();
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }
}
