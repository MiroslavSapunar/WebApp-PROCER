import React from 'react'
import { StrapiDynamicComponentAny } from '@strapi/componentes/any'
// import { NavegacionPaginaDispatcher } from "./navegacion/pagina";


export class StrapiDynamicComponentFactory {
    constructor(
        private components: StrapiDynamicComponentAny[]
    ) { }

    createDispatchers() {
        return this.components.map(c => this.createDispatcher(c))
    }

    private createDispatcher(component: StrapiDynamicComponentAny): () => JSX.Element {
        switch (component.__component) {
            // case "navegacion.pagina":
            //     return NavegacionPaginaDispatcher(component)

            default:
                return () => <></>
        }
    }
}
