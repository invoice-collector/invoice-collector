
import { SketchCollector } from '../../sketchCollector';

export class UpprCollector extends SketchCollector {

    static CONFIG = {
        id: "uppr",
        name: "uppr",
        description: "i18n.collectors.uppr.description",
        version: "0",
        website: "https://netzwerk.uppr.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034267.jpg",
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
        entryUrl: "https://netzwerk.uppr.de",
    }

    constructor() {
        super(UpprCollector.CONFIG);
    }
}
