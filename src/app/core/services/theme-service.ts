import { Injectable, signal, computed } from '@angular/core';

export type ThemeColor = 'primary' | 'secondary';

@Injectable({
  providedIn: 'root'  
})

export class ThemeService {
  private _backgroundColor = signal<ThemeColor>('primary');
  private _textColor = signal<ThemeColor>('secondary')
  backgroundColor = this._backgroundColor.asReadonly();
  textColor = this._textColor.asReadonly();

  backgroundClass = computed(() => `bg-${this._backgroundColor()}`);
  textColorClass = computed(() => `text-${this._textColor()}`)
  
  setBackgroundColor(color: ThemeColor) {
    this._backgroundColor.set(color);
  }
  
  toggleDarkMode() {
    const current = this._backgroundColor();
    this._backgroundColor.set(current === 'primary' ? 'secondary' : 'primary');
    this._textColor.set(current === 'secondary' ? 'primary' : 'secondary');
  }

  toggleLightMode() {
    const current = this._backgroundColor();
    this._backgroundColor.set(current === 'secondary' ? 'primary' : 'secondary');
    this._textColor.set(current === 'primary' ? 'secondary' : 'primary');
  }
  
  updateBackgroundOnScroll(scrollY: number) {
    if (scrollY > 500) {
      this._backgroundColor.set('primary');
    } else if (scrollY > 200) {
      this._backgroundColor.set('secondary');
    } else {
      this._backgroundColor.set('primary');
    }
  }
}