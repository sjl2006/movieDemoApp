import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IMovieTrackError } from '../models/movieTrackError';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {

  constructor() { }

  logMovieError(error: IMovieTrackError) {
    console.log('An error happened: ', JSON.stringify(error));
  }

  handleHttpError(err: HttpErrorResponse,errTip: string): Observable<IMovieTrackError> {
    let dataError: IMovieTrackError = { };
    dataError.errorNumber = err.status;
    dataError.messgae = err.statusText;
    dataError.friendlyMessage = errTip;
    return throwError(dataError);
  }
}
