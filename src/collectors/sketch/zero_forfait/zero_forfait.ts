
import { SketchCollector } from '../../sketchCollector';

export class ZeroForfaitCollector extends SketchCollector {

    static CONFIG = {
        id: "zero_forfait",
        name: "Zero forfait",
        description: "i18n.collectors.zero_forfait.description",
        version: "0",
        website: "https://www.prixtel.com/pws/SSO/authentication?callback=/client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136901.jpg",
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
        entryUrl: "https://www.prixtel.com/pws/SSO/authentication?callback=/client",
    }

    constructor() {
        super(ZeroForfaitCollector.CONFIG);
    }
}
