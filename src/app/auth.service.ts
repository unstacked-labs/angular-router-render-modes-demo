import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async isLoggedIn() {
    // Simulate an async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (typeof localStorage === 'undefined') {
      return false;
    }
    return !!localStorage?.getItem('token');
  }

  login() {
    localStorage?.setItem('token', 'JWT');
  }
}
