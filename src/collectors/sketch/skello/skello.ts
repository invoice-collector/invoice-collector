
import { SketchCollector } from '../../sketchCollector';

export class SkelloCollector extends SketchCollector {

    static CONFIG = {
        id: "skello",
        name: "Skello",
        description: "i18n.collectors.skello.description",
        version: "0",
        website: "https://skello.io/?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778133.jpg",
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
        entryUrl: "https://skello.io/?",
    }

    constructor() {
        super(SkelloCollector.CONFIG);
    }
}
