
import { SketchCollector } from '../../sketchCollector';

export class InxpressCollector extends SketchCollector {

    static CONFIG = {
        id: "inxpress",
        name: "InXpress",
        description: "i18n.collectors.inxpress.description",
        version: "0",
        website: "https://de.inxpress.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9389.jpg",
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
        entryUrl: "https://de.inxpress.com/",
    }

    constructor() {
        super(InxpressCollector.CONFIG);
    }
}
