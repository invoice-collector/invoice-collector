
import { SketchCollector } from '../../sketchCollector';

export class SmartAwareCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_aware",
        name: "Smart-Aware",
        description: "i18n.collectors.smart_aware.description",
        version: "0",
        website: "https://www.smart-aware.de/lms/mitglied/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4210197.jpg",
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
        entryUrl: "https://www.smart-aware.de/lms/mitglied/",
    }

    constructor() {
        super(SmartAwareCollector.CONFIG);
    }
}
