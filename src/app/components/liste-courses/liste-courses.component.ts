import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent {
  // Création d'une liste d'articles vides
  articles: string[] = [];

  // Création d'une variable pour stocker les nouveaux articles
  // en vue de les push dans notre tableau d'articles
  newArticle!:string;

  // Création d'une méthode permettant d'ajouter un nouvel article
  addArticle() {
    // Elle pousse l'article dans notre tableau
    this.articles.push(this.newArticle);
    // Puis vide notre variable newArticle pour que le champs soit vide
    this.newArticle='';
  };
}
