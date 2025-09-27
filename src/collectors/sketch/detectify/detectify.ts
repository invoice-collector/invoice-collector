
import { SketchCollector } from '../../sketchCollector';

export class DetectifyCollector extends SketchCollector {

    static CONFIG = {
        id: "detectify",
        name: "Detectify",
        description: "i18n.collectors.detectify.description",
        version: "0",
        website: "https://detectify.com/dashboard/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386531.jpg",
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
        entryUrl: "https://detectify.com/dashboard/billing/history",
    }

    constructor() {
        super(DetectifyCollector.CONFIG);
    }
}
