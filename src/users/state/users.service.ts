import { UsersStore, usersStore } from './users.store';
import { of } from 'rxjs';
import data from './users.data';
import { ID } from '@datorama/akita';
import { User } from './user.model';

export class UsersService {
  constructor(private usersStore: UsersStore) {}

  loadAll() {
    of(data).subscribe(entities => {
      this.usersStore.set(entities);
    });
  }

  setActive(id: ID) {
    this.usersStore.setActive(id);
  }

  updateActive(user: User) {
    this.usersStore.updateActive(user);
  }
}

export const usersService = new UsersService(usersStore);
