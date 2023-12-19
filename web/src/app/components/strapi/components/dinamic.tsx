import { StrapiDynamicComponentAny } from '@strapi/components/any'
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
                    <>
                        {component()}
                    </>)
            }
        </>
    )
}
