import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


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
      email: [''],
      password: ['']
    })
  }

  salvarDados() {
    const jsonData = {
      dadosLogin: this.formLogin.value,
    };
    console.log(jsonData);
  }



}
