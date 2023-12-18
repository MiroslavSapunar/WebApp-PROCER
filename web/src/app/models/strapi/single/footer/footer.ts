// import { StrapiBase, StrapiComponent, StrapiImg } from "../Base";

import { StrapiBase, StrapiImg, StrapiBaseColor, StrapiRichText, StrapiComponent } from '@strapi/base'
// import { StrapiBottonLink, StrapiNavegacionInterna, StrapiComponent } from '@modelsStrapi/components';

import { StrapiBottonLink } from '@strapi/componentes/elementos/boton_link'
import { StrapiNavegacionInterna } from '@strapi/componentes/elementos/navegacion_interna'

export type StrapiFooterCompany = StrapiComponent & {
    titulo: string,
    descripcion: StrapiRichText
}

export type StrapyFooterLinks = StrapiComponent & {
    titulo: string,
    navegaciones: StrapiNavegacionInterna[]
}

export type StrapiFooterColumna = StrapiFooterCompany | StrapyFooterLinks

export type StrapiFooter = StrapiBase & {
    data: {
        attributes: {
            logo_svg: StrapiImg,
            boton_link: StrapiBottonLink,
            background_color: StrapiBaseColor,
            columnas: StrapiFooterColumna[]
        }
    }
}
