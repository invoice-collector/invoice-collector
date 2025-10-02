
import { SketchCollector } from '../../sketchCollector';

export class SoneparFrCollector extends SketchCollector {

    static CONFIG = {
        id: "sonepar_fr",
        name: "Sonepar (.fr)",
        description: "i18n.collectors.sonepar_fr.description",
        version: "0",
        website: "https://www.sonepar.fr/service-soneshop_cms.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035221.jpg",
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
        entryUrl: "https://www.sonepar.fr/service-soneshop_cms.html",
    }

    constructor() {
        super(SoneparFrCollector.CONFIG);
    }
}
