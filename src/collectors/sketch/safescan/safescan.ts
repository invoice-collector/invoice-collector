
import { SketchCollector } from '../../sketchCollector';

export class SafescanCollector extends SketchCollector {

    static CONFIG = {
        id: "safescan",
        name: "Safescan",
        description: "i18n.collectors.safescan.description",
        version: "0",
        website: "https://www.safescan.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43996.jpg",
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
        entryUrl: "https://www.safescan.com/de/login",
    }

    constructor() {
        super(SafescanCollector.CONFIG);
    }
}
