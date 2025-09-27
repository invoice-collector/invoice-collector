
import { SketchCollector } from '../../sketchCollector';

export class AescriptsAepluginsCollector extends SketchCollector {

    static CONFIG = {
        id: "aescripts_aeplugins",
        name: "aescripts+aeplugins",
        description: "i18n.collectors.aescripts_aeplugins.description",
        version: "0",
        website: "https://aescripts.com/customer/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33851.jpg",
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
        entryUrl: "https://aescripts.com/customer/account/",
    }

    constructor() {
        super(AescriptsAepluginsCollector.CONFIG);
    }
}
