
import { SketchCollector } from '../../sketchCollector';

export class CheapsslsecurityCollector extends SketchCollector {

    static CONFIG = {
        id: "cheapsslsecurity",
        name: "CheapSSLsecurity",
        description: "i18n.collectors.cheapsslsecurity.description",
        version: "0",
        website: "https://cheapsslsecurity.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159731.jpg",
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
        entryUrl: "https://cheapsslsecurity.com/",
    }

    constructor() {
        super(CheapsslsecurityCollector.CONFIG);
    }
}
