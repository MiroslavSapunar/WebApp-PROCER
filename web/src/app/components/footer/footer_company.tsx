import Image from "next/image";
import Link from "next/link";

import { StrapiFooterCompany } from "@strapi/single/footer/tarjeta_principal";
import { endpoint, ETarget } from "@/utils/endpoints";

interface FooterCompanyProps {
    footerCompany: StrapiFooterCompany
}

export default function FooterCompany({ footerCompany }: FooterCompanyProps) {
    return (
        <div className=" w-full md:w-2/5">
            <p className="flex pt-4 md:pt-10 pb-2 md:pb-4 text-blanco font-medium text-2xl ">{footerCompany.titulo}</p>
            <p className="flex pb-2 md:pb-4 text-blanco ">{footerCompany.descripcion[0].children[0].text}</p>
            <div className="flex w-full justify-start items-center py-4">
                {
                    footerCompany.redes_sociales.map((red_social, index) =>
                        <Link href={red_social.url} target="_blank">
                            <div className='flex justify-center items-center h-fit w-fit relative py-1 pr-2 select-none invert'>
                                <Image
                                    src={endpoint(ETarget.front, red_social.logo_svg.data.attributes.url)}
                                    width={50}
                                    height={50}
                                    objectFit='contain'
                                    alt={red_social.url}
                                    className=" brightness-0 grayscale-0"
                                />
                            </div>
                        </Link>
                    )
                }
            </div >
        </div >
    )
}
