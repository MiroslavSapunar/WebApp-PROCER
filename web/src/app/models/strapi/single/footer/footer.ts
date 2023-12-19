
import { StrapiBase, StrapiImg, StrapiBaseColor } from '@strapi/base'
import { StrapiBottonLink } from '@strapi/components/elementos/boton_link'
import { StrapiDynamicComponentAny } from '@strapi/components/any'

export type StrapiFooter = StrapiBase & {
    data: {
        attributes: {
            logo_svg: StrapiImg,
            boton_link: StrapiBottonLink,
            background_color: StrapiBaseColor,
            tarjetas: StrapiDynamicComponentAny[]
        }
    }
}
