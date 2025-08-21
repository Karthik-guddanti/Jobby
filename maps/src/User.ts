import {faker} from '@faker-js/faker';

export class User {
   Name: string;
  location: {
    latitude: number;
    longitude: number;
  }

  constructor() {
    this.Name = faker.person.fullName();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
}