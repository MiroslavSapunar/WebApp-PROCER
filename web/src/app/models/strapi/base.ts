import { StrapiComponent } from "./components"


export type StrapiBase = {
    data: {
        id: number,
        attributes: {
            createdAt: string,
            updatedAt: string,
        }
    }
}

export type StrapiPagination = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number,
}

export type StrapiMeta = {
    pagination: StrapiPagination
}

export type StrapiImgFormat = {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    size: number,
    width: number,
    height: number
}

export type StrapiFile = StrapiBase & {
    data: {
        attributes: {
            name: string,
            alternativeText: string,
            caption: string,
            width: number,
            height: number,
            hash: string,
            ext: string,
            mime: string,
            size: number,
            url: string,
            previewUrl: string,
            provider: string,
            provider_metadata: string
        }
    }
}

export type StrapiImg = StrapiBase & StrapiFile & {
    data: {
        attributes: {
            formats: {
                thumbnail?: StrapiImgFormat,
                small?: StrapiImgFormat,
                medium?: StrapiImgFormat,
                large?: StrapiImgFormat
            }
        }
    }
}

export type StrapiNavBar = StrapiBase & {
    data: {
        attributes: {
            logo_svg: StrapiImg,
            Categorias: string,
            Boton_link: string
        }
    }
}

export type StrapiPagina = StrapiBase & {
    data: {
        attributes: {
            seo: string,
            nombre: string,
            seo_nombre: string,
            navegacion: StrapiNavegacion,
            secciones: StrapiComponent[]
        }
    }
}

export type StrapiNavegacion = StrapiBase & {
    data: {
        attributes: {
            seo_url: string,
            pagina: StrapiPagina,
            categoria: StrapiCategoria
        }
    }
}

export type StrapiTextStyle = {
    familia: StrapiFontFamily,
    tamanio: number,
    color: StrapiBaseColor
}

export type StrapiCategoria = "Servicios" | "Noticias" | "Institucional" | "Contacto" | "Registro"
export type StrapiFontFamily = "Titular" | "Cuerpo_Regular" | "Cuerpo_Medium"
export type StrapiBaseColor = "Croma_Principal_Oscuro" | "Croma_Principal_Claro" | "Croma_Secundario_Oscuro" | "Croma_Secundario_Claro" | "Medio_Tono_Oscuro" | "Medio_Tono_Claro" | "Negro" | "Blanco" | "Transparente"
