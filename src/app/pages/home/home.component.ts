import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/types';
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  promocoes: Promocao[] = [];

  constructor(private promocaoService: PromocaoService) {}

  ngOnInit(): void {
    this.promocaoService.listar().subscribe((resposta) => {
      this.promocoes = resposta;
    });
  }
}
