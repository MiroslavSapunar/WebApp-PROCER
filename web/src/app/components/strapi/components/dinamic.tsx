import { StrapiDynamicComponentAny } from '@/app/models/strapi/componentes/any'
import { StrapiDynamicComponentFactory } from "./factory"

type StrapiDynamicComponentsProps = {
    components: StrapiDynamicComponentAny[]    
}

export const DynamicComponents: React.FC<StrapiDynamicComponentsProps> = ({ components }) => {
    const factory = new StrapiDynamicComponentFactory(components)
    const dynamicComponentsReact = factory.createDispatchers()
    return (
        <>
            { 
                dynamicComponentsReact.map((component,i) => 
                    <div key={i}>
                        {component()}
                    </div>)
            }
        </>
    )
}
