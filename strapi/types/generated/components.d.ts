import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementosCroma extends Schema.Component {
  collectionName: 'components_elementos_cromas';
  info: {
    displayName: 'Croma';
    description: '';
  };
  attributes: {
    Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
  };
}

export interface ElementosFaqItem extends Schema.Component {
  collectionName: 'components_elementos_faq_items';
  info: {
    displayName: 'FAQ_Item';
  };
  attributes: {
    Pregunta: Attribute.String & Attribute.Required;
    Respuesta: Attribute.RichText & Attribute.Required;
  };
}

export interface ElementosLogoIcono extends Schema.Component {
  collectionName: 'components_elementos_logo_iconos';
  info: {
    displayName: 'Logo/Icono';
  };
  attributes: {
    SVG: Attribute.Media & Attribute.Required;
  };
}

export interface ElementosTipografia extends Schema.Component {
  collectionName: 'components_elementos_tipografias';
  info: {
    displayName: 'Tipografia';
    description: '';
  };
  attributes: {
    Familia: Attribute.Enumeration<
      ['Titular', 'Cuerpo_Regular', 'Cuerpo_Medium']
    > &
      Attribute.DefaultTo<'Cuerpo_Regular'>;
    Tamanio: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 18;
        max: 65;
      }> &
      Attribute.DefaultTo<35>;
  };
}

export interface SeccionesHomeCta extends Schema.Component {
  collectionName: 'components_secciones_home_ctas';
  info: {
    displayName: 'CTA';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Titulo: Attribute.String & Attribute.Required;
    Cuerpo: Attribute.Blocks;
    Sobretitulo: Attribute.String;
    Background_Color: Attribute.Component<'elementos.croma'> &
      Attribute.Required;
    Titulo_Color: Attribute.Component<'elementos.croma'> & Attribute.Required;
    Cuerpo_Color: Attribute.Component<'elementos.croma'>;
    Sobretitulo_Color: Attribute.Component<'elementos.croma', true>;
    Background_Image: Attribute.Media;
    Tipografia_Titulo: Attribute.Component<'elementos.tipografia'> &
      Attribute.Required;
    Tipografia_Cuerpo: Attribute.Component<'elementos.tipografia'>;
    Tipografia_Sobretitulo: Attribute.Component<'elementos.tipografia'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elementos.croma': ElementosCroma;
      'elementos.faq-item': ElementosFaqItem;
      'elementos.logo-icono': ElementosLogoIcono;
      'elementos.tipografia': ElementosTipografia;
      'secciones-home.cta': SeccionesHomeCta;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
