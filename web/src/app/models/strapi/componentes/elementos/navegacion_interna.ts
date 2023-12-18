import { StrapiComponent } from '@strapi/base'
import { StrapiNavegacion } from '@strapi/collections/navegacion'

export type StrapiNavegacionInterna = StrapiComponent & {
    texto: string,
    navegacion: StrapiNavegacion
}
