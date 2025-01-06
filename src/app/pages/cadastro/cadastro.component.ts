import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  perfilComponent = false;

  cadastrar(){
    console.log('Cadastrado com sucesso!');
  }
}
