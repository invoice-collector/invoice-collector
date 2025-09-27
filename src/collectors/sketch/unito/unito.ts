
import { SketchCollector } from '../../sketchCollector';

export class UnitoCollector extends SketchCollector {

    static CONFIG = {
        id: "unito",
        name: "Unito",
        description: "i18n.collectors.unito.description",
        version: "0",
        website: "https://app.unito.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213143.jpg",
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
        entryUrl: "https://app.unito.io",
    }

    constructor() {
        super(UnitoCollector.CONFIG);
    }
}
