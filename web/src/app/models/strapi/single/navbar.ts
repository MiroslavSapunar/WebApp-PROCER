// import { StrapiBase, StrapiComponent, StrapiImg } from "../Base";

import { StrapiBase, StrapiImg, StrapiBaseColor, StrapiTextStyle } from "@modelsStrapi/base";
import { StrapiBottonLink, StrapiNavegacionInterna, StrapiComponent } from "@modelsStrapi/components";

export type StrapiNavBarCategoria = StrapiComponent & {
    categoria: string,
    navegaciones: StrapiNavegacionInterna[]
}

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
