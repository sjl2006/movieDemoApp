import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesService } from '../services/movies.service';

import { MovieDetailComponent } from './movie-detail.component';

class MockMoviesService {}

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: MoviesService, useClass: MockMoviesService}],
      declarations: [ MovieDetailComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
