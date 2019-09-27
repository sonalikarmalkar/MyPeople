import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const people = [
        ];
        return {people};
    }

    genId(people: Person[]): number {
        return people.length > 0 ? Math.max(...people.map(() => people.length)) + 1 : 1;
    }
}
