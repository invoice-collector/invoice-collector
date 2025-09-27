
import { SketchCollector } from '../../sketchCollector';

export class GlsPolandCollector extends SketchCollector {

    static CONFIG = {
        id: "gls_poland",
        name: "GLS - Poland",
        description: "i18n.collectors.gls_poland.description",
        version: "0",
        website: "https://adeplus.gls-poland.com/adeplus/lm/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4572204.jpg",
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
        entryUrl: "https://adeplus.gls-poland.com/adeplus/lm/",
    }

    constructor() {
        super(GlsPolandCollector.CONFIG);
    }
}
