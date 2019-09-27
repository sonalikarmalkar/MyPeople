import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import {Person} from '../person';
import {PeopleService} from '../people.service';
import {of} from 'rxjs';


describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let service: PeopleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleComponent ],
        providers: [PeopleService]
    })
    .compileComponents();
    service = TestBed.get(PeopleService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have <th> element with "Name"`, () => {
      fixture = TestBed.createComponent(PeopleComponent);

      const bannerElement: HTMLElement = fixture.nativeElement;
      const th = bannerElement.querySelector('th');
      expect(th.textContent).toEqual('Name');
  });

  it(`should have <label> element with "Full Name: "`, () => {
        fixture = TestBed.createComponent(PeopleComponent);

        const bannerElement: HTMLElement = fixture.nativeElement;
        const label = bannerElement.querySelector('label');
        expect(label.textContent).toEqual('Full Name: ');
  });

  it(`#addPerson should add a person to the list of people ` , () => {
        fixture = TestBed.createComponent(PeopleComponent);

        component = new PeopleComponent(service);
        const response: Person[] = [];
        spyOn(service, 'getPeople').and.returnValue(of(response));


        const person: Person = {fullName: 'Sonali Karmalkar',
                email: 'skarmal@ncsu.edu',
                birthday: '022498',
                zipcode: '27513' };

        component.addPerson(person.fullName, person.email,
                            person.birthday,
                            person.zipcode);

        component.getPeople();
        expect(component.people).toEqual(response);
  });

  it(`#sortable should sort people in the list by first name ` , () => {
        fixture = TestBed.createComponent(PeopleComponent);

        component = new PeopleComponent(service);
        const response: Person[] = [];
        spyOn(service, 'getPeople').and.returnValue(of(response));


        const person: Person = {fullName: 'Sonali Karmalkar',
            email: 'skarmal@ncsu.edu',
            birthday: '022498',
            zipcode: '27513' };

        const newPerson: Person = {fullName: 'Ilanos Karmalkar',
          email: 'skarmal@ncsu.edu',
          birthday: '022498',
          zipcode: '27513' };


        component.addPerson(person.fullName, person.email,
            person.birthday,
            person.zipcode);
        component.addPerson(newPerson.fullName, newPerson.email, newPerson.birthday, newPerson.zipcode);

        component.getPeople();
        expect(component.people).toEqual(response);

        component.sortable();
        component.getPeople();
        expect(component.people).toEqual(response);
    });

  it(`#deletePerson should delete a person from the list of people ` , () => {
        fixture = TestBed.createComponent(PeopleComponent);

        component = new PeopleComponent(service);
        const response: Person[] = [];
        spyOn(service, 'getPeople').and.returnValue(of(response));


        const person: Person = {fullName: 'Sonali Karmalkar',
            email: 'skarmal@ncsu.edu',
            birthday: '022498',
            zipcode: '27513' };

        component.addPerson(person.fullName, person.email,
            person.birthday,
            person.zipcode);

        component.getPeople();
        expect(component.people).toEqual(response);

        component.deletePerson(person);
        component.getPeople();
        expect(component.people).toEqual(response);
    });

  it(` compare two objects and put them in the right order ` , () => {
      const a = '2';
      const b = '4';
      const c = '8';

      expect(component.compare(a, b)).toEqual(-1);
      expect(component.compare(a, c)).toEqual(-1);
      expect(component.compare(c, b)).toEqual(1);

  });

});
