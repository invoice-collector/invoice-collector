
import { SketchCollector } from '../../sketchCollector';

export class CamifFrCollector extends SketchCollector {

    static CONFIG = {
        id: "camif_fr",
        name: "Camif.fr",
        description: "i18n.collectors.camif_fr.description",
        version: "0",
        website: "https://www.camif.fr/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118958.jpg",
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
        entryUrl: "https://www.camif.fr/customer/account/login/",
    }

    constructor() {
        super(CamifFrCollector.CONFIG);
    }
}
