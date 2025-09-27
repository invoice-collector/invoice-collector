
import { SketchCollector } from '../../sketchCollector';

export class DerRingrohlingCollector extends SketchCollector {

    static CONFIG = {
        id: "der_ringrohling",
        name: "Der Ringrohling",
        description: "i18n.collectors.der_ringrohling.description",
        version: "0",
        website: "https://www.derringrohling.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517017.jpg",
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
        entryUrl: "https://www.derringrohling.de/",
    }

    constructor() {
        super(DerRingrohlingCollector.CONFIG);
    }
}
