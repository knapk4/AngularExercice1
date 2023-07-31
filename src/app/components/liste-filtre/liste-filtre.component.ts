import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  templateUrl: './liste-filtre.component.html',
  styleUrls: ['./liste-filtre.component.css']
})
export class ListeFiltreComponent {
  //Création d'une liste de noms
  items: string[] = ["Saul", "David Bowie", "Stevie Nicks", "Jimi Hendrix", "Johnny"]
}
