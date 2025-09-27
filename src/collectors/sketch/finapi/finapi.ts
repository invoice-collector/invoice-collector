
import { SketchCollector } from '../../sketchCollector';

export class FinapiCollector extends SketchCollector {

    static CONFIG = {
        id: "finapi",
        name: "finAPI",
        description: "i18n.collectors.finapi.description",
        version: "0",
        website: "https://finapi.zendesk.com/hc/en-us",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24304.jpg",
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
        entryUrl: "https://finapi.zendesk.com/hc/en-us",
    }

    constructor() {
        super(FinapiCollector.CONFIG);
    }
}
