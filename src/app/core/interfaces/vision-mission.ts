import {StrapiBaseModel} from './strapi-base-response';

export interface VisionMissionModel extends StrapiBaseModel{
  title: string;
  description: string;
}
