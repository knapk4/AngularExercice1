import { Component } from '@angular/core';

@Component({
  selector: 'app-magie',
  templateUrl: './magie.component.html',
  styleUrls: ['./magie.component.css']
})
export class MagieComponent {
  // déclaration d'un booléen avec une valeur par défaut sur true
  hidden: boolean = true;

  //Méthode pour modifier le booléen en inversant sa valeur
  toggle() {
    this.hidden = !this.hidden;
  }
}
