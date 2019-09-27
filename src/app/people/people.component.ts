import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
      this.getPeople();
  }

  /** Gets list of people */
  getPeople() {
      return this.peopleService.getPeople().subscribe(people => this.people = people);
  }

  /** Adds person to list */
  addPerson(fullName: string, email: string, birthday: string, zipcode: string) {
      if (!fullName || !email || !birthday || !zipcode) {
          return;
      }

      this.peopleService.addPerson({fullName, email, birthday, zipcode} as Person).subscribe(p => {
          this.people.push(p);
      });
  }

  /** Deletes person from list */
  deletePerson(person: Person) {
      this.people = this.people.filter(p => p !== person);
      this.peopleService.deletePerson(person).subscribe();
  }

  /** Sorts people based on first name */
  sortable() {
      const sortData = this.people.slice();
      this.people = sortData.sort((person1, person2) => this.compare(person1.fullName, person2.fullName));
      console.log(this.people);
  }

  /** Compares two fields and returns the correct order for sorting */
  compare(a: string, b: string): number {
      return (a > b ? 1 : -1);
  }
}
