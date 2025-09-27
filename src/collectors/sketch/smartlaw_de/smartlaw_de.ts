
import { SketchCollector } from '../../sketchCollector';

export class SmartlawDeCollector extends SketchCollector {

    static CONFIG = {
        id: "smartlaw_de",
        name: "smartlaw.de",
        description: "i18n.collectors.smartlaw_de.description",
        version: "0",
        website: "https://app.smartlaw.de/l/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17796.jpg",
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
        entryUrl: "https://app.smartlaw.de/l/#/login",
    }

    constructor() {
        super(SmartlawDeCollector.CONFIG);
    }
}
