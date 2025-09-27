
import { SketchCollector } from '../../sketchCollector';

export class SmartProspectiveCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_prospective",
        name: "Smart Prospective",
        description: "i18n.collectors.smart_prospective.description",
        version: "0",
        website: "https://app.smartprospective.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/925209.jpg",
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
        entryUrl: "https://app.smartprospective.com/login",
    }

    constructor() {
        super(SmartProspectiveCollector.CONFIG);
    }
}
