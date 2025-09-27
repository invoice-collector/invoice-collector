
import { SketchCollector } from '../../sketchCollector';

export class CrAndREnvironmentalServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "cr_and_r_environmental_services",
        name: "CR&R Environmental Services",
        description: "i18n.collectors.cr_and_r_environmental_services.description",
        version: "0",
        website: "https://secured.crrwasteservices.com/webpak2sw/index.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723594.jpg",
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
        entryUrl: "https://secured.crrwasteservices.com/webpak2sw/index.jsp",
    }

    constructor() {
        super(CrAndREnvironmentalServicesCollector.CONFIG);
    }
}
