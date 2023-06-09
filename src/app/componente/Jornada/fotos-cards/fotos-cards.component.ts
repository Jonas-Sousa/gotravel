import { CardService } from '../../../service/card.service';
import { Component, Input } from '@angular/core';
import { Card } from '../../../model/card.model';

@Component({
  selector: 'app-fotos-cards',
  templateUrl: './fotos-cards.component.html',
  styleUrls: ['./fotos-cards.component.scss']
})
export class FotosCardsComponent {

  listaFotos: Card[] = []

  constructor(private service: CardService) {}
  ngOnInit(): void {
    this.service.getLista().subscribe((listaDeFotos) => {
      this.listaFotos = listaDeFotos
    })
  }
}
