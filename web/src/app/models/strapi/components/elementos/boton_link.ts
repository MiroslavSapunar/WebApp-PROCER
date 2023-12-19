import { StrapiBaseColor } from '@strapi/base'
import { StrapiNavegacionInterna } from '@/app/models/strapi/components/elementos/navegacion_interna'

export type StrapiBottonLink =  {
    __component: "elementos.boton-link"
    color_fondo: StrapiBaseColor,
    color_texto: StrapiBaseColor,
    navegacion: StrapiNavegacionInterna,
}
