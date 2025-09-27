
import { SketchCollector } from '../../sketchCollector';

export class MercuryNzCollector extends SketchCollector {

    static CONFIG = {
        id: "mercury_nz",
        name: "Mercury.nz",
        description: "i18n.collectors.mercury_nz.description",
        version: "0",
        website: "https://myaccount.mercury.co.nz/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8933.jpg",
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
        entryUrl: "https://myaccount.mercury.co.nz/",
    }

    constructor() {
        super(MercuryNzCollector.CONFIG);
    }
}
