import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';
import { IMovie } from '../models/movies';
import { IMovieTrackError } from '../models/movieTrackError';
import { Observable, catchError, tap, throwError, map, of } from "rxjs";
import { AppConstants } from '../app.constants';
import { ErrorLogService } from './error-log.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient,
              private errorLogService: ErrorLogService) { }

  getMoviesFromCinemaWorld(): Observable<IMovie[] | IMovieTrackError> {
    return this.http.get<IMovie[]>(AppConstants.moviesOfCinemaWorldUrl)    
    .pipe(
      catchError(err => {
          let errorTip = "An error occurred getting movies from provider Cinnema Word";
          return this.errorLogService.handleHttpError(err, errorTip);
        })
    );
  }

  getMoviesFromFilmWorld(): Observable<IMovie[] | IMovieTrackError> {
    return this.http.get<IMovie[]>(AppConstants.moviesOfFilmWorldUrl)    
    .pipe(
      catchError(err => {
        let errorTip = "An error occurred getting movies from provider Film Word";
        return this.errorLogService.handleHttpError(err, errorTip);
      })
    );
  }

  getMovieByProviderAndID(provider:string, id: number): Observable<IMovie | IMovieTrackError | undefined> {
    let url = '';
    if (provider == AppConstants.providerFilmWorld) {
      url = AppConstants.moviesOfFilmWorldUrl;
    }
    else {
      url = AppConstants.moviesOfCinemaWorldUrl;
    }

    return this.http.get<IMovie[]>(url)    
    .pipe(
      map((movies: IMovie[]) => {
        return movies.find(m => (m.movieId === id && m.provider == provider));
      }),
      catchError(err => {
        let errorTip = "An error occurred getting a movie from provider " + provider;
        return this.errorLogService.handleHttpError(err, errorTip);
      })
    );
  }
/*
  handleHttpError(err: HttpErrorResponse,errTip: string): Observable<IMovieTrackError> {
    let dataError: IMovieTrackError = { };
    dataError.errorNumber = err.status;
    dataError.messgae = err.statusText;
    dataError.friendlyMessage = errTip;
    return throwError(dataError);
  }*/

}


