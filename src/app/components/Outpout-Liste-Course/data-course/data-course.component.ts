import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-course',
  templateUrl: './data-course.component.html',
  styleUrls: ['./data-course.component.css']
})
export class DataCourseComponent {

  //On déclare notre liste vide
  courses: any[] = [];

  // On définit une méthode pour ajouter un article
  addCourse(course: any): void {
    this.courses.push(course);
  }

  // On définit un getter pour afficher le total
  get total() {
    return this.courses.reduce((total, current) => total + current.prix, 0);
  }

}
