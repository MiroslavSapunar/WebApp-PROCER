import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementosBotonLink extends Schema.Component {
  collectionName: 'components_elementos_boton_links';
  info: {
    displayName: 'Boton_Link';
    description: '';
  };
  attributes: {
    color_fondo: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Croma_Principal_Claro'>;
    navegacion: Attribute.Component<'elementos.navegacion-interna'> &
      Attribute.Required;
    color_texto: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
  };
}

export interface ElementosEstiloTexto extends Schema.Component {
  collectionName: 'components_elementos_estilo_textos';
  info: {
    displayName: 'Estilo_Texto';
    description: '';
  };
  attributes: {
    familia: Attribute.Enumeration<
      ['Titular', 'Cuerpo_Regular', 'Cuerpo_Medium']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Cuerpo_Regular'>;
    tamanio: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 18;
        max: 65;
      }> &
      Attribute.DefaultTo<35>;
    color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
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

export interface ElementosNavegacionExterna extends Schema.Component {
  collectionName: 'components_navegacion_navegacion_externas';
  info: {
    displayName: 'Navegacion_Externa';
    description: '';
  };
  attributes: {
    url_externa: Attribute.String & Attribute.Required;
    texto: Attribute.String & Attribute.Required;
  };
}

export interface ElementosNavegacionInterna extends Schema.Component {
  collectionName: 'components_navegacion_navegacion_internas';
  info: {
    displayName: 'Navegacion_Interna';
    description: '';
  };
  attributes: {
    navegacion: Attribute.Relation<
      'elementos.navegacion-interna',
      'oneToOne',
      'api::navegacion.navegacion'
    >;
    texto: Attribute.String & Attribute.Required;
  };
}

export interface ElementosTarjeta extends Schema.Component {
  collectionName: 'components_elementos_tarjetas';
  info: {
    displayName: 'Tarjeta_Lisa';
    description: '';
  };
  attributes: {
    Titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    Estilo_Titulo: Attribute.Component<'elementos.estilo-texto'> &
      Attribute.Required;
    Resumen: Attribute.String & Attribute.Required;
    Estilo_Resumen: Attribute.Component<'elementos.estilo-texto'> &
      Attribute.Required;
    Sobretitulo: Attribute.String & Attribute.Required;
    Estilo_Sobretitulo: Attribute.Component<'elementos.estilo-texto'> &
      Attribute.Required;
    Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'        "Blanco",'>;
  };
}

export interface FooterTarjetaPrincipal extends Schema.Component {
  collectionName: 'components_footer_tarjeta_principals';
  info: {
    displayName: 'tarjeta_principal';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    descripcion: Attribute.Blocks & Attribute.Required;
    logos_svg: Attribute.Media;
    estilo_texto_titulo: Attribute.Component<'elementos.estilo-texto'> &
      Attribute.Required;
    estilo_texto_descripcion: Attribute.Component<'elementos.estilo-texto'> &
      Attribute.Required;
  };
}

export interface FooterTarjetaVinculos extends Schema.Component {
  collectionName: 'components_footer_tarjeta_vinculos';
  info: {
    displayName: 'tarjeta_vinculos';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    vinculos: Attribute.Component<'elementos.navegacion-interna', true> &
      Attribute.Required;
  };
}

export interface NavbarCategoriaMenu extends Schema.Component {
  collectionName: 'components_navbar_categoria_menus';
  info: {
    displayName: 'Categoria_Menu';
    description: '';
  };
  attributes: {
    navegaciones: Attribute.Component<'elementos.navegacion-interna', true> &
      Attribute.Required;
    categoria: Attribute.String & Attribute.Required;
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
    Titulo_Seccion: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    Estilo_Titulo_Seccion: Attribute.Component<'elementos.estilo-texto'>;
    Texto_Seccion: Attribute.Blocks;
    Estilo_Texto_Seccion: Attribute.Component<'elementos.estilo-texto'>;
    Sobretitulo_Seccion: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    Estilo_Sobretitulo_Seccion: Attribute.Component<'elementos.estilo-texto'>;
    Seccion_Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
    Background_Image: Attribute.Media;
    Navegacion_Interna: Attribute.Component<'elementos.navegacion-interna'>;
    Navegacion_Externa: Attribute.Component<'elementos.navegacion-externa'>;
    Boton_Link: Attribute.Component<'elementos.boton-link'>;
  };
}

export interface SeccionesHomeFaqItem extends Schema.Component {
  collectionName: 'components_elementos_faq_items';
  info: {
    displayName: 'FAQ_Item';
    description: '';
  };
  attributes: {
    Pregunta: Attribute.String & Attribute.Required;
    Respuesta: Attribute.RichText & Attribute.Required;
  };
}

export interface SeccionesHomeFaq extends Schema.Component {
  collectionName: 'components_secciones_home_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    Titulo_Seccion: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 100;
      }>;
    Estilo_Titulo_Seccion: Attribute.Component<'elementos.estilo-texto'>;
    Texto_Seccion: Attribute.Blocks;
    Estilo_Texto_Seccion: Attribute.Component<'elementos.estilo-texto'>;
    Seccion_Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
    Item_Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Medio_Tono_Claro'>;
    Items_FAQs: Attribute.Component<'secciones-home.faq-item', true> &
      Attribute.Required;
    Estilo_Preguntas: Attribute.Component<'elementos.estilo-texto'>;
    Estilo_Respuestas: Attribute.Component<'elementos.estilo-texto'>;
  };
}

export interface SeccionesHomeGrillaTarjetas extends Schema.Component {
  collectionName: 'components_secciones_home_grilla_tarjetas';
  info: {
    displayName: 'Grilla_Tarjetas';
  };
  attributes: {
    Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negr'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Blanco'>;
    Tarjetas: Attribute.Component<'elementos.tarjeta', true> &
      Attribute.Required;
  };
}

export interface SeccionesPaginaCarrouselImagenes extends Schema.Component {
  collectionName: 'components_elementos_carrousel_imagenes';
  info: {
    displayName: 'Carrousel_Imagenes';
    description: '';
  };
  attributes: {
    Imagenes: Attribute.Media & Attribute.Required;
    Encabezado: Attribute.String;
    Estilo_Encabezado: Attribute.Component<'elementos.estilo-texto'>;
  };
}

export interface SeccionesPaginaEncabezadoImagen extends Schema.Component {
  collectionName: 'components_secciones_pagina_encabezado_imagens';
  info: {
    displayName: 'Portada';
    description: '';
  };
  attributes: {
    Imagen: Attribute.Media;
    Background_Color: Attribute.Enumeration<
      [
        'Croma_Principal_Oscuro',
        'Croma_Principal_Claro',
        'Croma_Secundario_Oscuro',
        'Croma_Secundario_Claro',
        'Medio_Tono_Oscuro',
        'Medio_Tono_Claro',
        'Blanco',
        'Negro',
        'Transparente'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Medio_Tono_Claro'>;
  };
}

export interface SeccionesPaginaTextoConFormato extends Schema.Component {
  collectionName: 'components_secciones_pagina_texto_con_formatoes';
  info: {
    displayName: 'Texto_Con_Formato';
    description: '';
  };
  attributes: {
    Encabezado: Attribute.String;
    Estilo_Encabezado: Attribute.Component<'elementos.estilo-texto'>;
    Texto: Attribute.Blocks & Attribute.Required;
    Estilo_Texto: Attribute.Component<'elementos.estilo-texto'>;
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
      'elementos.boton-link': ElementosBotonLink;
      'elementos.estilo-texto': ElementosEstiloTexto;
      'elementos.logo-icono': ElementosLogoIcono;
      'elementos.navegacion-externa': ElementosNavegacionExterna;
      'elementos.navegacion-interna': ElementosNavegacionInterna;
      'elementos.tarjeta': ElementosTarjeta;
      'footer.tarjeta-principal': FooterTarjetaPrincipal;
      'footer.tarjeta-vinculos': FooterTarjetaVinculos;
      'navbar.categoria-menu': NavbarCategoriaMenu;
      'secciones-home.cta': SeccionesHomeCta;
      'secciones-home.faq-item': SeccionesHomeFaqItem;
      'secciones-home.faq': SeccionesHomeFaq;
      'secciones-home.grilla-tarjetas': SeccionesHomeGrillaTarjetas;
      'secciones-pagina.carrousel-imagenes': SeccionesPaginaCarrouselImagenes;
      'secciones-pagina.encabezado-imagen': SeccionesPaginaEncabezadoImagen;
      'secciones-pagina.texto-con-formato': SeccionesPaginaTextoConFormato;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
