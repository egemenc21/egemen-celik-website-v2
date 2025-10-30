import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SectionObserverDirective} from '../../directives/section-observer.directive';

interface SkillCategory {
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  skills: string[];
}


@Component({
  selector: 'app-skills',
  imports: [
    NgOptimizedImage,
    SectionObserverDirective
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'LANGUAGES',
      image: 'assets/images/safar-safarov-koOdUvfGr4c-unsplash.jpg',
      alt: 'Programming Languages',
      width: 1600,
      height: 2400,
      skills: ['C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'FRAMEWORKS',
      image: 'assets/images/arnold-francisca-f77Bh3inUpE-unsplash.jpg',
      alt: 'Development Frameworks',
      width: 1600,
      height: 2400,
      skills: ['ASP.NET Core', 'React', 'Angular', 'Node.js', 'Tailwind']
    },
    {
      title: 'DATABASE & TOOLS',
      image: 'assets/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg',
      alt: 'Database and Development Tools',
      width: 1600,
      height: 2400,
      skills: ['MSSQL', 'MongoDB', 'Git', 'AWS', 'Docker', 'CI/CD', 'Agile']
    }
  ];
}
