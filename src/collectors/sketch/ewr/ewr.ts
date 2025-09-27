
import { SketchCollector } from '../../sketchCollector';

export class EwrCollector extends SketchCollector {

    static CONFIG = {
        id: "ewr",
        name: "EWR",
        description: "i18n.collectors.ewr.description",
        version: "0",
        website: "http://www.ewr.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9269.jpg",
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
        entryUrl: "http://www.ewr.de",
    }

    constructor() {
        super(EwrCollector.CONFIG);
    }
}
