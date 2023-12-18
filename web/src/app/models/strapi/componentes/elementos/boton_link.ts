import { StrapiBaseColor, StrapiComponent } from '@strapi/base'
import { StrapiNavegacionInterna } from '@strapi/componentes/elementos/navegacion_interna'

export type StrapiBottonLink = StrapiComponent & {
    color_fondo: StrapiBaseColor,
    color_texto: StrapiBaseColor,
    navegacion: StrapiNavegacionInterna,
}
