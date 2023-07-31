import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-liste-courses',
  templateUrl: './form-builder-liste-courses.component.html',
  styleUrls: ['./form-builder-liste-courses.component.css']
})
export class FormBuilderListeCoursesComponent {
  // Déclaration du FormGroup
  // On rappelle la variable qu'on a déclaré dans le constructor
  // On ajoute la méthode '.group'
  article: FormGroup = this.formBuilder.group({
    // On déclare les champs du formulaire
    // Pas besoin de générer de FormControl
    // On précise aussi les validators (si besoin)
    designation: ['', Validators.required],
    prix: ['', Validators.required],
  })

  // Ajout d'un booleen pour vérifier que mon formulaire est soumis
  submitted: boolean = false;

  // Déclaration de la liste d'articles
  articles: any[] = []

  // Déclaration du formBuilder dans le constructeur
  constructor(private formBuilder:FormBuilder) {}

  // Déclaration d'une méthode pour ajouter les articles
  // Elle est privée car appelée par la méthode onSubmit
  private addArticle() {
    // Push du formulaire
    this.articles.push(this.article.value);
    // Reset du formulaire
    this.article.reset();
    // On repasse submitted à false
    this.submitted = false;
  }

  // Méthode onSubmit pour gérer la soumission
  onSubmit(): boolean {
    this.submitted = true;
    // Appel du validateur 'invalid' pour lancer la vérification
    if (this.article.invalid) {
      return false;
    } else {
      // Si le formulaire est valide, on appel la méthode addArticle
      this.addArticle()
      return true;
    }
  }

  // Définition d'un getter pour pouvoir afficher le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }

  // Pour se faciliter la vie on déclare un getter sur le form
  get form() {
    // Il retournera notre formControl
    return this.article.controls;
  }

}
