import { StrapiImg, StrapiRichText } from '@strapi/base';
import { StrapiTextStyle } from '../../components/elementos/estilo_texto';

type StrapiFooterSocialNetwork = {
    __component: "footer.tarjeta-principal-redes",
    url: string,
    logo_svg: StrapiImg
}

export type StrapiFooterCompany = {
    __component: "footer.tarjeta-principal",
    titulo: string,
    descripcion: StrapiRichText[],
    estilo_texto_titulo: StrapiTextStyle,
    estilo_texto_descripcion: StrapiTextStyle,
    redes_sociales: StrapiFooterSocialNetwork[]
}
