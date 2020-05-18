
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',  // <div id="courses"> ".courses"
    template: `
            <h2> {{ title}} </h2>
            <ul> 
                <li *ngFor ="let course of courses">
                        {{ course }}
                </li>
            </ul>
            `
})

export class CoursesComponent{

    title = "List of courses";
     courses;

    constructor(service: CoursesService){
        new CoursesService();
        this.courses = service.getCourses();
    }
    

}