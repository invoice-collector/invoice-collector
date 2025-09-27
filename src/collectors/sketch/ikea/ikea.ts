import { SketchCollector } from '../../sketchCollector';

export class IkeaCollector extends SketchCollector {

    static CONFIG = {
        id: "ikea",
        name: "Ikea",
        description: "i18n.collectors.ikea.description",
        version: "0",
        website: "https://ikea.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.ikea.com/fr/fr/profile/login?itm_campaign=wlo-user-slider-logged-out&itm_element=customer-service&itm_content=login",
    }

    constructor() {
        super(IkeaCollector.CONFIG);
    }
}
