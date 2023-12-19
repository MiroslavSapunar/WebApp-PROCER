// import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { endpoint, ETarget } from '@/utils/endpoints'
import { StrapiNavBar } from '@strapi/single/navbar/navbar';
import { StrapiNavBarCategoria } from '@strapi/single/navbar/categorias';
import { StrapiBottonLink } from '@/app/models/strapi/components/elementos/boton_link';
import { StrapiTextStyle } from '@/app/models/strapi/components/elementos/estilo_texto';

interface NavBarProps {
    navbarData: StrapiNavBar;
}

interface CategoriaProps {
    categoria: StrapiNavBarCategoria;
    textStyle: StrapiTextStyle
}

interface BotonProps {
    botonLink: StrapiBottonLink
}

function Categoria({ categoria, textStyle }: CategoriaProps) {

    const categoriaStyle = `flex justify-end px-1 py-1.5 text-sm capitalize transition-colors duration-300 transform hover:bg-gray-100 text-${textStyle.color} hover:text-Croma_Principal_Claro`

    return (
        <div className="group relative inline-block mx-2.5">
            <button
                className="
                relative z-10 block
                text-white hover:text-Croma_Principal_Claro px-1 cursor-default  "
            >
                {categoria.categoria}
            </button>
            <div
                className="absolute hidden h-auto group-hover:block bg-Blanco w-36 right-0 z-20 rounded-sm shadow-xl origin-top-right"
            >
                <ul className='top-0'>
                    {
                        categoria.navegaciones.map((navegacion) => (
                            <li key={navegacion.texto}>
                                <Link href={navegacion.navegacion.data.attributes.seo_url} className={categoriaStyle} >
                                    {navegacion.texto}
                                </Link>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

function RegistryBoton({ botonLink }: BotonProps) {
    const styleButton = `px-4 py-2 font-medium tracking-wide text-${botonLink.color_texto} bg-${botonLink.color_fondo} rounded-3xl`
    return (
        <div className="flex flex-none w-1/6 justify-end  ">
            <button className={styleButton}>
                <Link href={botonLink.navegacion.navegacion.data.attributes.seo_url}>
                    {botonLink.navegacion.texto}
                </Link>
            </button>
        </div>
    )
}

export default function NavBar({ navbarData }: NavBarProps) {

    const navBar = navbarData.data.attributes;
    const logo = navBar.logo_svg.data.attributes;
    const botonLink = navBar.boton_link;

    const styleNavbar = `bg-${navBar.background_color} w-full px-12 md:px-24 flex flex-row justify-between items-center`

    return (
        <nav className={styleNavbar}>
            <div className="flex w-1/3 justify-start items-center ">
                <Link href={"/"}>
                    <div className='h-auto w-80 py-8 relative select-none' >
                        {/* CHECKEAR CONSEGUIR LA INFO DESDE EL BACK */}
                        <Image src={endpoint(ETarget.front, logo.url) || '/brand_Blanco.svg'} alt={logo.alternativeText || 'logo_navbar'}
                            width={400}
                            height={400}
                            objectFit='contain'
                        />
                    </div>
                </Link>
            </div>
            <div className="flex grow justify-end ">
                {
                    navBar.categorias.map((categoria) => (
                        <Categoria key={categoria.categoria}
                            categoria={categoria}
                            textStyle={navBar.estilo_texto_categorias}

                        />
                    ))
                }
            </div>
            {
                botonLink &&
                <RegistryBoton botonLink={botonLink} />
            }
        </nav>
    );
}
