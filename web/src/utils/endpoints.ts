import qs from "qs";
declare module 'qs';

const strapi_url_front = process.env.NEXT_PUBLIC_STRAPI_URL_FRONT || 'http://localhost:1337'
const strapi_url_back = process.env.STRAPI_URL_BACK || 'http://strapi:1337'

export enum ETarget {
    front,
    back
}

export const endpoint = (destino: ETarget, url: string): string => {
    if (!url)
        return ""
    switch (destino) {
        case ETarget.back:
            return `${strapi_url_back}${url}`
        case ETarget.front:
            return `${strapi_url_front}${url}`
    }
}

export const queryHome = qs.stringify(
    {
        populate:
            [
                'logo_svg',
                'categorias.navegaciones.navegacion',
                'estilo_texto_categorias',
                'boton_link.navegacion.navegacion'
            ]
    },
    {
        encodeValuesOnly: true
    }
);

export const queryFooter = qs.stringify(
    {
        populate:
            [
                'logo_svg',
                'boton_link.navegacion.navegacion',
                'columnas',
            ]
    },
    {
        encodeValuesOnly: true
    }
);

export const strapi_url = {
    base: `/`,
    navbar: `/api/nav-bar?${queryHome}`,
    footer: `/api/footer?${queryFooter}`,
}
