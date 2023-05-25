import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
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
    console.log(localStorage.getItem('users'));

  }

  salvarLogin() {

    let dataLogin = this.formLogin.value

    if(this.formLogin.valid == true){
      this.authService.login(dataLogin)
      .subscribe( dataServer => {
        if (dataServer.length > 0){
          if (dataLogin.password === dataServer[0].password){
            dataServer[0].password = '';
            localStorage.setItem('users', JSON.stringify(dataServer[0]))
            this.router.navigate(['home'])
          }else {
            alert('Usuário ou Senha inválida')
          }
        }else{
          alert('Usuário ou Senha inválida')
        }
      })
      this.formLogin.reset();

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
