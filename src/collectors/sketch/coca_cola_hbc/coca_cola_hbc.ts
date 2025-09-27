
import { SketchCollector } from '../../sketchCollector';

export class CocaColaHbcCollector extends SketchCollector {

    static CONFIG = {
        id: "coca_cola_hbc",
        name: "Coca-Cola HBC",
        description: "i18n.collectors.coca_cola_hbc.description",
        version: "0",
        website: "https://coca-colahellenic.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/423617.jpg",
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
        entryUrl: "https://coca-colahellenic.com/en/",
    }

    constructor() {
        super(CocaColaHbcCollector.CONFIG);
    }
}
