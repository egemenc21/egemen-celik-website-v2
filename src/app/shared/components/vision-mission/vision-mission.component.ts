import {Component, inject, OnInit, signal} from '@angular/core';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {NgClass} from '@angular/common';
import {SectionObserverDirective} from '../../directives/section-observer.directive';
import {VisionMissionModel} from '../../../core/interfaces/vision-mission';
import {StrapiService} from '../../../core/services/strapi-service';

@Component({
  selector: 'app-vision-mission',
  imports: [
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent implements OnInit{
  isVisionVisible = false;
  isMissionVisible: boolean = false;

  strapiService = inject(StrapiService)

  visionMissionData = signal<VisionMissionModel[]>([]);
  vision = signal<VisionMissionModel | null >(null);
  mission = signal<VisionMissionModel | null >(null);

  async ngOnInit() {
    try {
      const res = await this.strapiService.getVisionMissionData();
      this.visionMissionData.set(res.data);
      this.vision.set(res.data[0]);
      this.mission.set(res.data[1]);
    } catch (error) {
      console.log(error);
    }
  }

  onVisionVisibleChange(event: boolean) {
    this.isVisionVisible = event;
  }

  onMissionVisibleChange(event: boolean) {
    this.isMissionVisible = event;
  }
}
