import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit{

  formCadastrar!: FormGroup
  today = new Date(1998,5,10);
  currentYear:number = this.today.getFullYear();
  currentMonth:number = this.today.getMonth();
  currentDay:number = this.today.getDate();


  constructor(
    private formbuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formCadastrar = this.formbuilder.group({
      nomeCompleto:['',Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z][a-zA-Z ]+( [a-zA-Z]+)+$/)
      ])],
      dataDeNascimento: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
        (control) => {
          const value = control.value;
          if (value) {
            const today = new Date();
            const birthDate = new Date(value);
            const isValidDate = !isNaN(birthDate.getTime());

            if (!isValidDate) {
              return { invalidDate: true };
            }

            const minDate = new Date("1900-01-01");
            const maxDate = new Date();

            if (birthDate < minDate || birthDate > maxDate) {
              return { invalidRange: true };
            }
          }
          return null;
        }
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required]
    })

  }

  salvarCadastro(){
    if(this.formCadastrar.valid == true){
      const jsonData = {
        dadosCadastro: this.formCadastrar.value,
      };
      this.formCadastrar.reset()
      console.log(jsonData);
    }
  }

}




