import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MoviesService } from '../services/movies.service';
import { ErrorLogService } from '../services/error-log.service';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  exports: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule  
  ],
  providers: [
    MoviesService,
    ErrorLogService
  ]
})
export class MovieDetailModule { }
