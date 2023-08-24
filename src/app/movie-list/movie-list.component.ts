import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movies';
import { MoviesService } from '../services/movies.service';
import { AppConstants } from '../app.constants';
import { ErrorLogService } from '../services/error-log.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  imageWidth = AppConstants.movieImageWidth;
  imageMargin = AppConstants.movieImageMargin;
  errorMessage = '';
  movies: IMovie[] = [];
  sortProperty: string = 'availableTime';
  sortOrder = -1;

  constructor(private moviesService: MoviesService,
              private errorLogService: ErrorLogService) { }

  ngOnInit(): void {
      this.movies = [];

      this.moviesService.getMoviesFromCinemaWorld().subscribe(
        moviesResult => {
          this.movies = this.movies.concat(<IMovie[]>moviesResult);
          this.sortBy('availableTime');
          this.sortIcon('availableTime');
        },
        error => {
          this.errorMessage =error;
          this.errorLogService.logMovieError(error);
        }
      )

      this.moviesService.getMoviesFromFilmWorld().subscribe(
        moviesResult => {
          this.movies = this.movies.concat(<IMovie[]>moviesResult);
          this.sortBy('availableTime');
          this.sortIcon('availableTime');
        },
        error => {
          this.errorMessage =error;
          this.errorLogService.logMovieError(error);
        }
      )
        
  }

  sortBy(property: string) {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;
    this.movies = [...this.movies.sort((a: any, b: any) => {
        // sort comparison function
        let result = 0;
        if (a[property] < b[property]) {
            result = 1;
        }
        if (a[property] > b[property]) {
            result = -1;
        }

        return result * this.sortOrder;
    })];
}

  sortIcon(property: string) {
    if (property === this.sortProperty) {
        return this.sortOrder === 1 ? '⬆️' : '⬇️';
    }
    return '';
  }

}

