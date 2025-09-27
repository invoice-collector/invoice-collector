
import { SketchCollector } from '../../sketchCollector';

export class O2HomeServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "o2_home_services",
        name: "O2 Home Services",
        description: "i18n.collectors.o2_home_services.description",
        version: "0",
        website: "https://www.o2.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122531.jpg",
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
        entryUrl: "https://www.o2.fr/",
    }

    constructor() {
        super(O2HomeServicesCollector.CONFIG);
    }
}
