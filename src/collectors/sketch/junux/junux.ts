
import { SketchCollector } from '../../sketchCollector';

export class JunuxCollector extends SketchCollector {

    static CONFIG = {
        id: "junux",
        name: "JUNUX",
        description: "i18n.collectors.junux.description",
        version: "0",
        website: "https://account.junux.de/auth/login?returnUrl=%2Faccount%2Fsubscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1237204.jpg",
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
        entryUrl: "https://account.junux.de/auth/login?returnUrl=%2Faccount%2Fsubscriptions",
    }

    constructor() {
        super(JunuxCollector.CONFIG);
    }
}
