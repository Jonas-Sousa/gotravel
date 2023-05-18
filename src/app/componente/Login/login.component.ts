import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email

      ])],
      password: ['', Validators.required
      ]
    })
  }

  salvarDados() {
    console.log(this.formLogin.get('email')?.errors);
    if(this.formLogin.valid == true){
      const jsonData = {
        dadosLogin: this.formLogin.value,
      };
      console.log(jsonData);
    }
  }

  isPasswordInvalid() {
    const passwordControl = this.formLogin.get('password');
    return passwordControl?.invalid && passwordControl?.touched;
  }

  isEmailInvalid() {
    const emailControl = this.formLogin.get('email');
    return emailControl?.invalid && emailControl?.touched;
  }




}
