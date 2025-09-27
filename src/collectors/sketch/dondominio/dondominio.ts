
import { SketchCollector } from '../../sketchCollector';

export class DondominioCollector extends SketchCollector {

    static CONFIG = {
        id: "dondominio",
        name: "DonDominio",
        description: "i18n.collectors.dondominio.description",
        version: "0",
        website: "https://www.dondominio.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/813731.jpg",
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
        entryUrl: "https://www.dondominio.com/en/",
    }

    constructor() {
        super(DondominioCollector.CONFIG);
    }
}
