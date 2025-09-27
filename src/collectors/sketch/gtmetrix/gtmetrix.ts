
import { SketchCollector } from '../../sketchCollector';

export class GtmetrixCollector extends SketchCollector {

    static CONFIG = {
        id: "gtmetrix",
        name: "GTmetrix",
        description: "i18n.collectors.gtmetrix.description",
        version: "0",
        website: "https://gtmetrix.com/pro/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32787.jpg",
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
        entryUrl: "https://gtmetrix.com/pro/",
    }

    constructor() {
        super(GtmetrixCollector.CONFIG);
    }
}
