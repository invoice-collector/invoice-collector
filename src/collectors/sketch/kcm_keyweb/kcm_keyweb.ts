
import { SketchCollector } from '../../sketchCollector';

export class KcmKeywebCollector extends SketchCollector {

    static CONFIG = {
        id: "kcm_keyweb",
        name: "KCM - Keyweb",
        description: "i18n.collectors.kcm_keyweb.description",
        version: "0",
        website: "https://kcp.keyweb.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762229.jpg",
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
        entryUrl: "https://kcp.keyweb.de",
    }

    constructor() {
        super(KcmKeywebCollector.CONFIG);
    }
}
