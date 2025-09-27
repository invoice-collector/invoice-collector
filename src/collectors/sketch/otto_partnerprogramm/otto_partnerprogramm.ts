
import { SketchCollector } from '../../sketchCollector';

export class OttoPartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "otto_partnerprogramm",
        name: "Otto Partnerprogramm",
        description: "i18n.collectors.otto_partnerprogramm.description",
        version: "0",
        website: "https://partnerprogramm.otto.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144294.jpg",
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
        entryUrl: "https://partnerprogramm.otto.de/user-billings.do",
    }

    constructor() {
        super(OttoPartnerprogrammCollector.CONFIG);
    }
}
