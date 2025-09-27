
import { SketchCollector } from '../../sketchCollector';

export class _42mattersCollector extends SketchCollector {

    static CONFIG = {
        id: "42matters",
        name: "42matters",
        description: "i18n.collectors.42matters.description",
        version: "0",
        website: "https://42matters.com/user/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81808.jpg",
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
        entryUrl: "https://42matters.com/user/payments",
    }

    constructor() {
        super(_42mattersCollector.CONFIG);
    }
}
