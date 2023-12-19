import { StrapiComponent } from '@strapi/base';
import { StrapiNavegacionInterna } from '@/app/models/strapi/components/elementos/navegacion_interna';

export type StrapiNavBarCategoria = StrapiComponent & {
    categoria: string,
    navegaciones: StrapiNavegacionInterna[]
}
