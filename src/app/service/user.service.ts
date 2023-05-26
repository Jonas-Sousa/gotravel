import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  getUserName(): string | null {
    const usersJson = localStorage.getItem('users');
    if (usersJson) {
      const users = JSON.parse(usersJson);
      const name = users.name;

      return name;
    }

    return null;
  }

  getUserEmail(): string | null {
    const usersJson = localStorage.getItem('users');
    if (usersJson) {
      const users = JSON.parse(usersJson);
      const name = users.email;

      return name;
    }

    return null;
  }


}
