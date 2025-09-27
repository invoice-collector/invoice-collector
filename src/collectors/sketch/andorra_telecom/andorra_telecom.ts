
import { SketchCollector } from '../../sketchCollector';

export class AndorraTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "andorra_telecom",
        name: "Andorra Telecom",
        description: "i18n.collectors.andorra_telecom.description",
        version: "0",
        website: "https://www.andorratelecom.ad/botiga/#/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378345.jpg",
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
        entryUrl: "https://www.andorratelecom.ad/botiga/#/factures",
    }

    constructor() {
        super(AndorraTelecomCollector.CONFIG);
    }
}
