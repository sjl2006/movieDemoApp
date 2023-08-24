import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../models/movies';
import { NgIf, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { MoviesService } from '../services/movies.service';
import { AppConstants } from '../app.constants';
import { ErrorLogService } from '../services/error-log.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Movie Info';
  movie: IMovie | undefined;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private moviesService: MoviesService,
              private errorLogService: ErrorLogService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    let provider = this.route.snapshot.paramMap.get("provider");
    if (provider == null ) {
      provider = AppConstants.providerCinemaWorld;
    } 
  
    this.moviesService.getMovieByProviderAndID(provider,id).subscribe(
      movieResult => { this.movie =<IMovie>movieResult; },
      error => { this.errorLogService.logMovieError(error);}
    )
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
