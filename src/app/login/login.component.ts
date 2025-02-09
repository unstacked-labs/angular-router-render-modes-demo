import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    imports: [],
    template: `
    <div
      class="container flex flex-col items-center justify-center min-h-screen"
    >
      <h4 class="mb-4 text-2xl font-semibold">Login</h4>
      <button
        (click)="login()"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all duration-200"
      >
        Login
      </button>
    </div>
  `,
    styles: [
        `
      .container {
        padding: 1rem;
      }
    `,
    ]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  login() {
    this.authService.login();
    this.router.navigate(['/']);
  }
}
