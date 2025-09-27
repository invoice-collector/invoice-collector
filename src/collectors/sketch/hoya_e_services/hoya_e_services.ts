
import { SketchCollector } from '../../sketchCollector';

export class HoyaEServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "hoya_e_services",
        name: "Hoya E-services",
        description: "i18n.collectors.hoya_e_services.description",
        version: "0",
        website: "https://eservices.hoya.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216890.jpg",
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
        entryUrl: "https://eservices.hoya.fr/",
    }

    constructor() {
        super(HoyaEServicesCollector.CONFIG);
    }
}
