import { StrapiComponent } from '@strapi/base';

export type StrapiNavegacionExterna = StrapiComponent & {
    texto: string,
    url_externa: string,
}
