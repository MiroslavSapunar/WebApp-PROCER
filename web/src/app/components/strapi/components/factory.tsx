import React from 'react'
import { StrapiDynamicComponentAny } from '@strapi/components/any'
import { FooterMissionDispatcher } from "@components/strapi/components/dispatcher/footer_tarjeta_principal";
import { FooterNavegationDispatcher } from "@components/strapi/components/dispatcher/footer_tarjeta_vinculos";


export class StrapiDynamicComponentFactory {
    constructor(
        private components: StrapiDynamicComponentAny[]
    ) { }

    createDispatchers() {
        return this.components.map(c => this.createDispatcher(c))
    }

    private createDispatcher(component: StrapiDynamicComponentAny): () => JSX.Element {
        switch (component.__component) {
            case "footer.tarjeta-principal":
                return FooterMissionDispatcher(component)
            case "footer.tarjeta-vinculos":
                return FooterNavegationDispatcher(component)

            default:
                return () => <></>
        }
    }
}
