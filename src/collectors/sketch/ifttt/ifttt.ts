
import { SketchCollector } from '../../sketchCollector';

export class IftttCollector extends SketchCollector {

    static CONFIG = {
        id: "ifttt",
        name: "IFTTT",
        description: "i18n.collectors.ifttt.description",
        version: "0",
        website: "https://ifttt.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737763.jpg",
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
        entryUrl: "https://ifttt.com/billing",
    }

    constructor() {
        super(IftttCollector.CONFIG);
    }
}
