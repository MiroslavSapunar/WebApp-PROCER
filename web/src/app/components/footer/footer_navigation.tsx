import Link from "next/link";
import { StrapyFooterLinks } from "@/app/models/strapi/single/footer/tarjeta_navegacion";

interface FooterCompanyProps {
    footerNavigation: StrapyFooterLinks
}

export default function FooterNavigation({ footerNavigation }: FooterCompanyProps) {
    console.log("footerNavigation")
    console.log(footerNavigation)
    console.log(footerNavigation.vinculos)

    return (
        <div className=" w-full md:w-1/5 pt-4 md:pt-0 pb-4 md-pb-0 ">
            <p className="border-b-[1px] md:border-0 pb-2 md:pt-10 md:pb-4 text-blanco font-medium text-xl ">{footerNavigation.titulo}</p>
            {
                footerNavigation.vinculos.map((vinculo, index) =>
                    <div key={index} className="flex w-full justify-start items-center py-2 hover:text-Croma_Principal_Claro">
                        <Link href={vinculo.navegacion.data.attributes.seo_url} className="text-blanco">
                            {vinculo.texto}
                        </Link>
                    </div>
                )
            }
        </div>
    )

}
