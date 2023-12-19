import { StrapiFooterCompany } from '@strapi/single/footer/tarjeta_principal';
import FooterCompany from '@components/footer/footer_company';

export const FooterMissionDispatcher = (footerCompany: StrapiFooterCompany) =>
    () => <FooterCompany footerCompany={footerCompany} />
