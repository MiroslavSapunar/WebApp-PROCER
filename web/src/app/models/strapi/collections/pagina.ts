import { StrapiBase } from '@strapi/base'
import { StrapiNavegacion } from '@strapi/collections/navegacion'

export type StrapiPagina = StrapiBase & {
    data: {
        attributes: {
            seo: string,
            nombre: string,
            seo_nombre: string,
            navegacion: StrapiNavegacion,
            // secciones: StrapiComponent[]
        }
    }
}
