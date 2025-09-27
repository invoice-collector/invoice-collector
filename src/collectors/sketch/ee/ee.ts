
import { SketchCollector } from '../../sketchCollector';

export class EeCollector extends SketchCollector {

    static CONFIG = {
        id: "ee",
        name: "EE",
        description: "i18n.collectors.ee.description",
        version: "0",
        website: "https://id.ee.co.uk/id/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8892.jpg",
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
        entryUrl: "https://id.ee.co.uk/id/login",
    }

    constructor() {
        super(EeCollector.CONFIG);
    }
}
