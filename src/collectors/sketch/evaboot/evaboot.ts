
import { SketchCollector } from '../../sketchCollector';

export class EvabootCollector extends SketchCollector {

    static CONFIG = {
        id: "evaboot",
        name: "Evaboot",
        description: "i18n.collectors.evaboot.description",
        version: "0",
        website: "https://app.evaboot.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823854.jpg",
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
        entryUrl: "https://app.evaboot.com/",
    }

    constructor() {
        super(EvabootCollector.CONFIG);
    }
}
