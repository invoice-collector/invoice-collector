
import { SketchCollector } from '../../sketchCollector';

export class AqlCollector extends SketchCollector {

    static CONFIG = {
        id: "aql",
        name: "aql",
        description: "i18n.collectors.aql.description",
        version: "0",
        website: "https://portal.aql.com/login-required/?login_redirect=%2Faccount%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40983.jpg",
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
        entryUrl: "https://portal.aql.com/login-required/?login_redirect=%2Faccount%2F",
    }

    constructor() {
        super(AqlCollector.CONFIG);
    }
}
