import {StrapiBaseModel} from './strapi-base-response';

export interface AboutMeModel extends StrapiBaseModel{
  title: string;
  description: string;
}
