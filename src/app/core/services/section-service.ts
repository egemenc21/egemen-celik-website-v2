import {Injectable, signal} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionTrackerService {
  activeSection = signal("home");

  setActiveSection(sectionId: string) {
    this.activeSection.set(sectionId);
  }

  getCurrentSection(): string {
    return this.activeSection();
  }
}
