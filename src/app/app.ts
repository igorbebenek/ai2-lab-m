import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('homes');
}
