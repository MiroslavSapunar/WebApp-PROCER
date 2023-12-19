// import { StrapiBase, StrapiComponent, StrapiImg } from "../Base";

import { StrapiBase, StrapiImg, StrapiBaseColor } from "@strapi/base";
import { StrapiBottonLink } from '@/app/models/strapi/components/elementos/boton_link';
import { StrapiTextStyle } from '@/app/models/strapi/components/elementos/estilo_texto';
import { StrapiNavBarCategoria } from '@strapi/single/navbar/categorias';

export type StrapiNavBar = StrapiBase & {
    data: {
        attributes: {
            logo_svg: StrapiImg,
            categorias: StrapiNavBarCategoria[],
            boton_link: StrapiBottonLink,
            background_color: StrapiBaseColor,
            estilo_texto_categorias: StrapiTextStyle,
        }
    }
}
