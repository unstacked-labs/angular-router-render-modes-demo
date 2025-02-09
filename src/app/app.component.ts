import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="h-screen w-screen flex flex-col items-center justify-center">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
