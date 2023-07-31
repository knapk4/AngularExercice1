import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-liste-course',
  templateUrl: './reactive-liste-course.component.html',
  styleUrls: ['./reactive-liste-course.component.css']
})
export class ReactiveListeCourseComponent {

  // Définition des variabless

  //Article est déclaré en tant que FormGroup
  article: FormGroup;

  // Articles est la liste d'articles, qui contiendra nos articles
  // Puisque nous n'avons pas de 'model', on type en any pour le moment

  articles: any[] = []

  constructor() {
    //Dans le constructeur, on ajoute le FormGroup qui contiendra nos FormControls
    this.article = new FormGroup({
      // Article contiendra un attribut désignation et un attribut prix
      // C'est un peu comme si on déclare un objet

      // Ajout des validateyrs 'required en 2nd paramètre
      designation: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
    })
  }

  // On ajoute une méthode pour ajouter des articles
  // On l'ajoutera côté HTML avec l'événement submit
  addArticle() {
    // Ajout de l'article
    this.articles.push(this.article.value);
    // Vide le formulaire
    this.article.reset();
  }

  // Définition d'un getter pour pouvoir afficher le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0)
  }
}
