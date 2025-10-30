import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './shared/components/navigation/navigation';
import { Footer } from './shared/components/footer/footer';
import { ThemeService } from './core/services/theme-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('egemen-celik-website-v2');
  themeService = inject(ThemeService)

}
