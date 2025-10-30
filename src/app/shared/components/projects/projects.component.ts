import { Component } from '@angular/core';
import {CommonModule, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';
import {SectionObserverDirective} from '../../directives/section-observer.directive';

interface Project {
  image: string;
  alt: string;
  width: number;
  height: number;
  rowSpan: string;
  objectPosition?: string;
  githubUrl: string;
  liveUrl?: string;
}


@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage, LucideAngularModule, CommonModule, SectionObserverDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // Icons
  GithubIcon = Github;
  ExternalLinkIcon = ExternalLink;

  // Projects data
  projects: Project[] = [
    {
      image: 'assets/images/campTraveller.png',
      alt: 'Camp Traveller',
      width: 1920,
      height: 4879,
      rowSpan: 'row-span-6',
      githubUrl: 'https://github.com/egemenc21/camptraveler',
      liveUrl: 'https://camptraveler-sand.vercel.app/'
    },
    {
      image: 'assets/images/crwn-clothing.png',
      alt: 'Crown Clothing',
      width: 1850,
      height: 1574,
      rowSpan: 'row-span-4',
      githubUrl: 'https://github.com/egemenc21/crwn-clothing-e-commerce',
      liveUrl: 'https://fanciful-syrniki-5664a9.netlify.app/'
    },
    {
      image: 'assets/images/mcp-irail-image.png',
      alt: 'MCP iRail',
      width: 732,
      height: 897,
      rowSpan: 'row-span-3',
      objectPosition: 'object-top',
      githubUrl: 'https://github.com/egemenc21/i-rail-mcp',
    },
    {
      image: 'assets/images/tricountReplica.png',
      alt: 'Tricount Replica',
      width: 1017,
      height: 969,
      rowSpan: 'row-span-3',
      objectPosition: 'object-top',
      githubUrl: 'https://github.com/egemenc21/tricount-replica-app',
      liveUrl: 'https://main--aquamarine-empanada-f3b8ca.netlify.app/'
    },
    {
      image: 'assets/images/mern-chat.png',
      alt: 'MERN Chat',
      width: 1919,
      height: 1080,
      rowSpan: 'row-span-2',
      githubUrl: 'https://github.com/egemenc21/mern-chat'
    }
  ];

}
