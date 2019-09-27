import {Injectable} from '@angular/core';
import {Person} from './person';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

    private peopleUrl = 'api/people';  // URL - api
    private url;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) { }

  /** Gets all people from server */
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  /** Adds Person to server */
  addPerson(person: Person): Observable<any> {
      return this.http.post(this.peopleUrl, person, this.httpOptions);
  }

  deletePerson(person: Person): Observable<any> {
      this.url = `${this.peopleUrl}/${person}`;
      return this.http.delete<Person>(this.url,  this.httpOptions);
  }
}
