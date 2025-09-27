
import { SketchCollector } from '../../sketchCollector';

export class EffiliationCollector extends SketchCollector {

    static CONFIG = {
        id: "effiliation",
        name: "Effiliation",
        description: "i18n.collectors.effiliation.description",
        version: "0",
        website: "https://www.effiliation.com/de/publishers-area/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84342.jpg",
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
        entryUrl: "https://www.effiliation.com/de/publishers-area/",
    }

    constructor() {
        super(EffiliationCollector.CONFIG);
    }
}
