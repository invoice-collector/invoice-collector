
import { SketchCollector } from '../../sketchCollector';

export class ECigFactoryFrCollector extends SketchCollector {

    static CONFIG = {
        id: "e_cig_factory_fr",
        name: "E-cig-factory.fr",
        description: "i18n.collectors.e_cig_factory_fr.description",
        version: "0",
        website: "http://e-cig-factory.fr/shop/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118632.jpg",
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
        entryUrl: "http://e-cig-factory.fr/shop/fr/",
    }

    constructor() {
        super(ECigFactoryFrCollector.CONFIG);
    }
}
