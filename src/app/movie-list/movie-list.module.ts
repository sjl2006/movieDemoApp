import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MoviesService } from '../services/movies.service';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorLogService } from '../services/error-log.service';



@NgModule({
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService,
    ErrorLogService
  ]
})
export class MovieListModule { }
