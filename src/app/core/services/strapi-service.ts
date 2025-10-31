import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom} from 'rxjs';
import {StrapiBaseModel, StrapiGenericResponse} from '../interfaces/strapi-base-response';
import {ContentModel} from '../interfaces/content';
import {AboutMeModel} from '../interfaces/about-me';

interface HomeModel extends StrapiBaseModel{
  name: string;
  surname: string;
}

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  base = environment.STRAPI_URL;
  constructor(private httpClient: HttpClient) {

  }

  getHomeData() {
    return lastValueFrom(this.httpClient.get<StrapiGenericResponse<HomeModel>>(`${this.base}/api/home-page`));
  }

  getContentData(){
    return lastValueFrom(this.httpClient.get<StrapiGenericResponse<ContentModel[]>>(`${this.base}/api/contents?populate=*`));
  }

  getAboutMeData(){
    return lastValueFrom(this.httpClient.get<StrapiGenericResponse<AboutMeModel>>(`${this.base}/api/about-me`));
  }

}
