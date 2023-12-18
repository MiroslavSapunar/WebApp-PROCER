import { StrapiComponent } from '@strapi/base';
import { StrapiNavegacionInterna } from '@strapi/componentes/elementos/navegacion_interna';

export type StrapiNavBarCategoria = StrapiComponent & {
    categoria: string,
    navegaciones: StrapiNavegacionInterna[]
}
