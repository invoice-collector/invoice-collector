
import { SketchCollector } from '../../sketchCollector';

export class SmartmockupsCollector extends SketchCollector {

    static CONFIG = {
        id: "smartmockups",
        name: "smartmockups",
        description: "i18n.collectors.smartmockups.description",
        version: "0",
        website: "https://smartmockups.com/de/user-settings/plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223726.jpg",
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
        entryUrl: "https://smartmockups.com/de/user-settings/plan",
    }

    constructor() {
        super(SmartmockupsCollector.CONFIG);
    }
}
