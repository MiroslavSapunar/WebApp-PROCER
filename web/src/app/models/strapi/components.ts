import { StrapiBase, StrapiNavegacion, StrapiTextStyle } from "./base";

export type StrapiComponent = StrapiBase & {
    __component: string,
}

export type StrapiNavegacionInterna = StrapiComponent & {
    texto: string,
    navegacion: StrapiNavegacion
}

export type StrapiBottonLink = StrapiComponent & {
    background_color: string,
    estilo_texto_boton: StrapiTextStyle,
    navegacion: StrapiNavegacionInterna,
}
