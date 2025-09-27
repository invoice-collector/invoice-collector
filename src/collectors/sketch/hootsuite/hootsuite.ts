
import { SketchCollector } from '../../sketchCollector';

export class HootsuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "hootsuite",
        name: "Hootsuite",
        description: "i18n.collectors.hootsuite.description",
        version: "0",
        website: "https://hootsuite.com/billing/manage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2204.jpg",
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
        entryUrl: "https://hootsuite.com/billing/manage",
    }

    constructor() {
        super(HootsuiteCollector.CONFIG);
    }
}
