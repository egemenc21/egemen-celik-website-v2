import {StrapiBaseModel} from './strapi-base-response';

export interface ContentModel extends StrapiBaseModel {
  title: string;
  description: string;
}
