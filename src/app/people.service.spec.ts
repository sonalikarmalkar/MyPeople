import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import {Person} from './person';

describe('PeopleService', () => {

    const person: Person  = {fullName: 'Sonali Karmalkar', email: 'skarmal@ncsu.edu', birthday: '022498', zipcode: '27513'};
    const people = Array<Person>();
    people.push(person);

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });

    it(`#addPerson should return 'observable value'`, () => {
        const service: PeopleService = TestBed.get(PeopleService);
        expect(service.addPerson(person).subscribe(value => {
            expect(value).toBe('observable value');
        }));
    });

    it(`#deletePerson should return 'observable value'`, () => {
        const service: PeopleService = TestBed.get(PeopleService);
        expect(service.deletePerson(person).subscribe(value => {
            expect(value).toBe('observable value');
        }));
    });

    it('getPeople should return list of people', () => {
        const service: PeopleService = TestBed.get(PeopleService);
        expect(service.getPeople().subscribe(value => {
            expect(value).toBe(people);
        }));
    });
});


