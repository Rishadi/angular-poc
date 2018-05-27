import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
        { id: 1, name: 'The Power', author: 'Naomi Alderman'},
        { id: 2, name: 'Ill Will', author: 'Dan Chaon'},
        { id: 3, name: 'Shadowbahn', author: 'Steve Erickson'},
        { id: 4, name: 'So Much Blue', author: 'Percival Everett'},
        { id: 5, name: 'Exit West', author: 'Mohsin Hamid'},
        { id: 6, name: 'A Legacy of Spies', author: 'John le Carré'},
        { id: 7, name: 'Ka', author: 'John Crowley'},
        { id: 8, name: 'Dinner at the Center of the Earth', author: 'Nathan Englander'},
        { id: 9, name: 'The Leavers', author: 'Lisa Ko'},
        { id: 10, name: 'Her Body', author: 'Carmen Maria Machado'}
    ];
    return {books};
  }
}