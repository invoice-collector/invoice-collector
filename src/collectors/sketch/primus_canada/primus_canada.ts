
import { SketchCollector } from '../../sketchCollector';

export class PrimusCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "primus_canada",
        name: "Primus Canada",
        description: "i18n.collectors.primus_canada.description",
        version: "0",
        website: "https://primus.ca/business/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8989.jpg",
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
        entryUrl: "https://primus.ca/business/en/",
    }

    constructor() {
        super(PrimusCanadaCollector.CONFIG);
    }
}
