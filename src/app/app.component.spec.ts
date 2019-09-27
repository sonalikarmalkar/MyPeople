import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PeopleComponent} from './people/people.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
}));

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
          PeopleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My People'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My People');
  });
});
