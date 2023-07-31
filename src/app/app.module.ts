
// Module Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { GenericAlertButtonComponent } from './components/generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { ListeCoursesComponent } from './components/liste-courses/liste-courses.component';
import { ReactiveListeCourseComponent } from './components/reactive-liste-course/reactive-liste-course.component';
import { FormBuilderListeCoursesComponent } from './components/form-builder-liste-courses/form-builder-liste-courses.component';
import { FormulaireUtilisateursComponent } from './components/formulaire-utilisateurs/formulaire-utilisateurs.component';
import { DataCourseComponent } from './components/Outpout-Liste-Course/data-course/data-course.component';
import { FormCourseComponent } from './components/Outpout-Liste-Course/form-course/form-course.component';


// comme pour app.component.ts nous avons ici un décorateur
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    ListeCoursesComponent,
    ReactiveListeCourseComponent,
    FormBuilderListeCoursesComponent,
    FormulaireUtilisateursComponent,
    DataCourseComponent,
    FormCourseComponent
  ],

  //On déclare ici les modules à importer
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
