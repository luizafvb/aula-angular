import { Component, OnInit } from '@angular/core';
import { Courses } from './courses';

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Courses[] = [];

    ngOnInit(): void {
        this.courses=[
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/rating.png',
                price: 99.99,
                code: 'XPS-8976',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/rating.png',
                price: 45.99,
                code: 'LPS-8976',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 1, 2020'
            }
        ]
    }


}