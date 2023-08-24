import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesService } from '../services/movies.service';

import { MovieListComponent } from './movie-list.component';

class MockMoviesService {}

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: MoviesService, useClass: MockMoviesService}],
      declarations: [ MovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should sort the array', () => {
    component.movies= [
      { 
        "movieId": 1,
        "movieName": "Barbie",
        "provider": "Film World",
        "availableTime": "9/15/23, 5:30 PM",
        "price": 15,
        "rating": 4.4,
        "imageUrl":"assets/images/Barbie.png",
        "director": "Greta",
        "duration": "114 mins",
        "genre": "Action",
        "classfication": "PG"
      },
      {
        "movieId": 2,
        "movieName": "BlackBerry",
        "provider": "Film World",
        "availableTime": "9/15/23, 2:30 PM",
        "price": 30,
        "rating": 3.8,
        "imageUrl":"assets/images/BlackBerry.png",
        "director": "Nick",
        "duration": "100 mins",
        "genre": "Action",
        "classfication": "PG"
      },
      {
        "movieId": 3,
        "movieName": "Oppenheimer",
        "provider": "Film World",
        "availableTime": "9/15/23, 3:30 PM",
        "price": 20,
        "rating": 4.1,
        "imageUrl":"assets/images/Oppenheimer.png",
        "director": "Mike",
        "duration": "120 mins",
        "genre": "Document",
        "classfication": "PG"
      }];

      component.sortOrder = 1;
      component.sortProperty = 'availableTime';
      component.sortBy('availableTime')

      expect(component.movies[0].movieId).toEqual(2);
  }); 
});
