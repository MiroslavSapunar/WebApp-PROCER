'use server'
import Image from 'next/image';
import { endpoint, ETarget } from '@/utils/endpoints'
import { StrapiFooter } from '@strapi/single/footer/footer';
import { DynamicComponents } from '@components/strapi/components/dinamic';

interface FooterProps {
    footerData: StrapiFooter;
}

export default async function Footer({ footerData }: FooterProps) {
    const footer = footerData.data.attributes
    const logo = footer.logo_svg.data.attributes
    const styleFooter = `bg-${footer.background_color} w-full px-12 md:px-24 py-4`
    return (
        <footer className={styleFooter}>
            <div className=" border-b-[1px] border-l-Blanco items-center flex flex-col md:flex-row">
                <div className="md:flex w-full md:w-2/5 justify-start items-center ">
                    <div className='h-auto w-auto py-3 md:py-6 relative select-none' >
                        {/* CHECKEAR CONSEGUIR LA INFO DESDE EL BACK */}
                        <Image src={endpoint(ETarget.front, logo.url)} alt={logo.alternativeText || 'logo_footer'}
                            width={400}
                            height={400}
                            objectFit='contain'
                        />
                    </div>
                </div>
                {/* BOTON CONTACTO DESCARTADO */}
                {/* <div className="invisible md:w-1/5 h-0 md:h-auto md:visible md:flex md:grow justify-end "> boton
                </div> */}
            </div>
            <div className="flex flex-col md:flex-row py-1 md:py-2 justify-between">
                <DynamicComponents components={footer.tarjetas} />
            </div>
        </footer>
    )
}

