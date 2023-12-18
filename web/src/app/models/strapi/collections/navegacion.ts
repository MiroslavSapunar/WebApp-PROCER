import { StrapiBase, StrapiCategoria } from '@strapi/base';
import { StrapiPagina } from '@strapi/collections/pagina';

export type StrapiNavegacion = StrapiBase & {
    data: {
        attributes: {
            seo_url: string,
            pagina: StrapiPagina,
            categoria: StrapiCategoria
        }
    }
}
