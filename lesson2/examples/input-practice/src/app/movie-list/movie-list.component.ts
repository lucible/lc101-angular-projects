import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle : string) {
      let error = ''
      if (newTitle === '') {
         error = 'Error: blank titles not allowed.'
      } else if (this.movies.includes(newTitle)) {
         error = 'Error: duplicate movie submitted.'
      } else {
         this.movies.push(newTitle)
      }
      return error
   }
}