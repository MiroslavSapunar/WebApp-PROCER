import { StrapyFooterLinks } from '@strapi/single/footer/tarjeta_navegacion';
import FooterNavigation from '@components/footer/footer_navigation';

export const FooterNavegationDispatcher = (footerCompany: StrapyFooterLinks) =>
    () => <FooterNavigation footerNavigation={footerCompany} />
