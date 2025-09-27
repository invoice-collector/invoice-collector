
import { SketchCollector } from '../../sketchCollector';

export class CalltureCollector extends SketchCollector {

    static CONFIG = {
        id: "callture",
        name: "Callture",
        description: "i18n.collectors.callture.description",
        version: "0",
        website: "https://support.callture.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31733.jpg",
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
        entryUrl: "https://support.callture.net/",
    }

    constructor() {
        super(CalltureCollector.CONFIG);
    }
}
